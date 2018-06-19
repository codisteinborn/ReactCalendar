import React from 'react';
import './MonthCal.css'


const MonthCal = props => {
    return (
        <div className="monthCell" current={props.current} onDoubleClick={() => props.onDoubleClick(props.current)}>
            <p>
            {props.day}
            </p>
            <p>
            Calendar Entries:
            {/* {props.entries.length} */}
            </p>
        </div>
);
}

export default MonthCal;