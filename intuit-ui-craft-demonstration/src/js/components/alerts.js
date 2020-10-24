import React from 'react';
import moment from 'moment';

const Alert = ({ alert }) => {
    return <div className='col-xs-12'>
        <a href={alert.uri}>
            <h2>Severe Weather Alert</h2>
            <h3>{alert.title}</h3>
            <p>{alert.description}</p>
            <p>Alert effective until: {moment(alert.expires * 1000).format('LLLL')}</p>
        </a>
    </div>;
};

const Alerts = ({ alerts }) => {
    if(!alerts || !alerts.length) return <div></div>;

    return <div className='row'>
        {alerts.map((a) => <Alert alert={a} />)}
    </div>;
};

export default Alerts;
