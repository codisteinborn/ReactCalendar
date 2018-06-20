import React from 'react';
import './MonthCal.css'


const MonthCal = props => {
    return (
        <div className="monthCell" current={props.current} onDoubleClick={() => props.onDoubleClick(props.current)}>
            <p className="date">
            {props.day}
            </p>
            {props.entries.length > 0 ?
            <p className="entryNum">
            Calendar Entries: {props.entries.length}
            </p>
            :
            <p/>}
        </div>
);
}

export default MonthCal;