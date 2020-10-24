import 'babel-polyfill';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import reducer from './reducer';
import { changeLocation } from './actions';

import App from './components/app';

// Log actions and store changes to console
const logger = store => next => action => {
    console.log('dispatching', action);
    let result = next(action);
    console.log('next state', store.getState());
    return result;
};

const store = createStore(
    reducer,
    applyMiddleware(logger, thunk)
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// Test a hardcoded location
store.dispatch(changeLocation('Mckinney, TX'));
