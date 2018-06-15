import React from 'react';
// import Moment from 'moment';
import './MonthCal.css'


const MonthCal = props => {
    console.log(props.d)
    return (
        <div className="monthCell">
            <p>
            {props.day}
            </p>
            <p>
            # of Calendar Entries:
            {/* {props.entries.length} */}
            </p>
        </div>
);
}

export default MonthCal;