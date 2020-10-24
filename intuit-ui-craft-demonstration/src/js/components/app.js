import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash/fp';

import CurrentWeather from './currentWeather';
import WeeklyForecast from './weeklyForecast';
import Controls from './controls';
import Alerts from './alerts';
import { changeLocation, refresh } from '../actions';

const App = ({ forecast, location, changeLocation, refresh }) => {
    return <div className='row center-xs around-sm middle-sm'>
        <Alerts alerts={_.get('alerts', forecast)}/>
        <CurrentWeather forecast={_.get('currently', forecast)} location={location} />
        <WeeklyForecast forecasts={_.get('daily.data', forecast)} />
        <Controls changeLocation={changeLocation} refresh={refresh} />
    </div>;
};

// Things to pass to App with connect
const mapStateToProps = ({ forecast, location }) => {
    return { forecast: forecast.data, location: location.data };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({ changeLocation, refresh }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
