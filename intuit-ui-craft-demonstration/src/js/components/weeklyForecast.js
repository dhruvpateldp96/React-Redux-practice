import React from 'react';
import moment from 'moment';
import _ from 'lodash/fp';

import { iconMap } from '../util';
import LoadingIcon from './loadingIcon';

const DayForecast = ({ forecast }) => {
    return <div className='weekly-forecast-day row between-xs middle-xs' >
        <div className='date col-xs-5 col-sm-4'>
            {moment(forecast.time * 1000).format('ll')}
        </div>
        <div className='col-xs-5 col-sm-4'>
            <div className='row center-xs'>
                <div className='icon col-xs-2'>
                    <i className={iconMap(forecast.icon)}></i>
                </div>
                <div className='temperature col-xs-10'>
                    <span className='hi'>{Math.round(forecast.temperatureMax)}</span>
                    <span>&nbsp;/&nbsp;</span>
                    <span className='lo'>{Math.round(forecast.temperatureMin)}</span>
                </div>
            </div>
        </div>
    </div>;
};

const tomorrowIndex = _.findIndex((forecast) => {
    return moment(forecast.time*1000).isSame(moment().add(1, 'day'), 'day');
});

const WeeklyForecast = ({ forecasts }) => {
    if(!forecasts) return <LoadingIcon />;


    const week = forecasts.slice(tomorrowIndex(forecasts), 8);

    return <div className='weekly-forecast col-sm-6 col-xs-12'>
        {
            week.map((forecast) => <DayForecast forecast={forecast} key={forecast.time}/>)
        }
    </div>;
};

export default WeeklyForecast;
