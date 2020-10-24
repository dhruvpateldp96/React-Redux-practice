import React from 'react';
import moment from 'moment';

import { iconMap, getLocationName } from '../util';
import LoadingIcon from './loadingIcon';


const CurrentWeather = ({ forecast, location }) => {
    return <div className='current col-sm-6 col-xs-12'>
        <div className='row center-xs middle-xs'>
            <div className='icon col-xs-2'>
                {forecast ? <i className={iconMap(forecast.icon)}></i> : <LoadingIcon />}
            </div>
            <div className='col-xs-4'>
                <div className='location'>
                    {location ? getLocationName(location) : <LoadingIcon />}
                </div>
                <div className='date'>
                    {moment().format('ll')}
                </div>
            </div>
            <div className='temperature col-xs-12'>
                {forecast ? Math.round(forecast.temperature) + '°F' : <LoadingIcon />}
            </div>
        </div>
    </div>;
};

export default CurrentWeather;
