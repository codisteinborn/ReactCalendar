import React from 'react';
// import Moment from 'moment';
import './MonthCal.css'


const MonthCal = props => {
    return (
    <div>
        <div className="monthCell">
            <p>
            Date (day - day of week)
            {props.days}
            </p>
            <p>
            # of Calendar Entries
            </p>
        </div>
    </div>
);
}

export default MonthCal;