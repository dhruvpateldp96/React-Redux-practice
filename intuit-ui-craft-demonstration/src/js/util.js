import _ from 'lodash/fp';

export const iconMap = (icon) => {
    switch(icon) {
        case 'clear-day': return 'wi wi-day-sunny';
        case 'clear-night': return 'wi wi-day-cloudy';
        case 'rain': return 'wi wi-rain';
        case 'snow': return 'wi wi-snow';
        case 'sleet': return 'wi wi-sleet';
        case 'wind': return 'wi wi-strong-wind';
        case 'fog': return 'wi wi-fog';
        case 'cloudy': return 'wi wi-cloudy';
        case 'partly-cloudy-day': return 'wi wi-day-cloudy';
        case 'partly-cloudy-night': return 'wi wi-night-cloudy';
        case 'hail': return 'wi wi-hail';
        case 'thunderstorm': return 'wi wi-thunderstorm';
        case 'tornado': return 'wi wi-tornado';
        case 'flood': return 'wi wi-flood';
        default: return 'wi wi-na';
    }
};

const hasType = (type) => _.pipe(
    _.prop('types'),
    _.includes(type)
);

const isCity = hasType('locality');
const isState = hasType('administrative_area_level_1');

const getCity = _.find(isCity);
const getState = _.find(isState);

export const getLocationName = ({ address_components: components }) => {
    return getCity(components).long_name + ', ' + getState(components).short_name;
};

window.getLocationName = getLocationName;
