import { combineReducers } from 'redux';
import {
    REQUEST_LOCATION,
    REQUEST_LOCATION_SUCCESS,
    REQUEST_LOCATION_FAILURE,
    REQUEST_FORECAST,
    REQUEST_FORECAST_SUCCESS,
    REQUEST_FORECAST_FAILURE
} from './actions';

// TODO: bit of repeating code here, could generalize into a reducer generator
const location = (state = { fetching: false, data: null }, action) => {
    switch(action.type) {
        case REQUEST_LOCATION:
            return {
                ...state,
                fetching: true,
                data:null
            };

        case REQUEST_LOCATION_SUCCESS:
            return {
                ...state,
                fetching: false,
                data: action.data
            };

        case REQUEST_LOCATION_FAILURE:
            return {
                ...state,
                fetching: false,
                error: action.error
            };

        default: return state;
    }
};

const forecast = (state = { fetching: false, data: null }, action) => {
    switch(action.type) {
        case REQUEST_FORECAST:
            return {
                ...state,
                fetching: true,
                data: null
            };

        case REQUEST_FORECAST_SUCCESS:
            return {
                ...state,
                fetching: false,
                data: action.data
            };

        case REQUEST_FORECAST_FAILURE:
            return {
                ...state,
                fetching: false,
                error: action.error
            };

        default: return state;
    }
};

export default combineReducers({ location, forecast });
