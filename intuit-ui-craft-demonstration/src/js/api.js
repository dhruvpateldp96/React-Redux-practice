import fetchPonyfill from 'fetch-ponyfill';
// Use this to get around CORS. In a real app we wouldn't need to do this
// But this is easier than setting up a server for this UI demonstration
import fetchJSONP from 'fetch-jsonp';
import _ from 'lodash/fp';

const fetch = fetchPonyfill();

const GEOCODING_API_KEY = 'AIzaSyDK4sMxIxgRJPAPFq0OrgED3rb_vJaTGMs';
const FORECAST_API_KEY = '7e559af15c1fd2579e174f7709043745';

// Throws errors from a fetch response so we can more easily handle the error
const handleHTTPError = async (fetchPromise) => {
    const response = await fetchPromise;
    if(!response.ok) throw new Error(response.statusText);
    return response;
};

// Simply invokes response.json()
const getJSON = async (fetchPromise) => {
    const response = await fetchPromise;
    return response.json();
};

// Generates the geocoding URL
const geocodingUrl = _.curry((key, address) =>
    'https://maps.googleapis.com/maps/api/geocode/json?address=' +
    encodeURIComponent(address) +
    '&key=' + key
);

// Accepts address and returns promise for geocoding API response
export const fetchGeocoding = _.pipe(
    geocodingUrl(GEOCODING_API_KEY),
    fetch,
    handleHTTPError,
    getJSON
);

// Generates the Forecast.io URL
const forecastUrl = _.curry((key, lat, long) =>
    `https://api.forecast.io/forecast/${key}/${lat},${long}`
);

// Accepts lat,long and returns promise for forecast API response
export const fetchForecast = _.pipe(
    forecastUrl(FORECAST_API_KEY),
    fetchJSONP,
    handleHTTPError,
    getJSON
);
