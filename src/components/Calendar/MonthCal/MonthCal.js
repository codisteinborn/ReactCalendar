import React from 'react';
// import Moment from 'moment';
import './MonthCal.css'


const MonthCal = props => {
    return (
        <div className="monthCell">
            <p>
            {props.day}
            </p>
            <p>
            Calendar Entries:
            {props.entries.length}
            </p>
        </div>
);
}

export default MonthCal;