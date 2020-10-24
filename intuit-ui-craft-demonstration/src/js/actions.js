import { fetchGeocoding, fetchForecast } from './api';

// Action types for requesting location
export const REQUEST_LOCATION = 'REQUEST_LOCATION';
export const REQUEST_LOCATION_SUCCESS = 'REQUEST_LOCATION_SUCCESS';
export const REQUEST_LOCATION_FAILURE = 'REQUEST_LOCATION_FAILURE';

// Action creator to request geocoding location by address
const requestLocation = (address) => async (dispatch) => {
    try {
        dispatch({ type: REQUEST_LOCATION });

        const data = await fetchGeocoding(address);

        if(data.status === 'OK') {
            return dispatch({ type: REQUEST_LOCATION_SUCCESS, data: data.results[0] });
        }
        throw new Error('Received error from Google Geocoding API: ' + data.status);
    }
    catch (e) {
        dispatch({ type: REQUEST_LOCATION_FAILURE, error: e.message });
    }
};

// Action types for requesting forecast
export const REQUEST_FORECAST = 'REQUEST_FORECAST';
export const REQUEST_FORECAST_SUCCESS = 'REQUEST_FORECAST_SUCCESS';
export const REQUEST_FORECAST_FAILURE = 'REQUEST_FORECAST_FAILURE';

// Action creator for requesting forecast
const requestForecast = (lat, long) => async (dispatch) => {
    try {
        dispatch({ type: REQUEST_FORECAST });

        const data = await fetchForecast(lat, long);

        if(data.error) {
            throw new Error(data.error);
        }
        dispatch({ type: REQUEST_FORECAST_SUCCESS, data });
    }
    catch (e) {
        dispatch({ type: REQUEST_FORECAST_FAILURE, error: e.message });
    }
};

// Action creator to change location and update forecast
export const changeLocation = (address) => async (dispatch) => {
    await dispatch(requestLocation(address));
    await dispatch(refresh());
};

export const refresh = () => async (dispatch, getState) => {
    const state = getState();
    if(state.location.data) {
        const { lat, lng } = state.location.data.geometry.location;
        await dispatch(requestForecast(lat, lng));
    }
};
