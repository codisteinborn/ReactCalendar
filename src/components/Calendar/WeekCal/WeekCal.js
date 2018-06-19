import React from 'react';
import './WeekCal.css'


const WeekCal = props => {
    // const handleSubmit = function () {
    //     localStorage.setItem(props.current, props.currEntry);
    // }
    return (
        <div className="weekCell">
            <p>
                {props.day}
            </p>
            <p>
                Calendar Entries:
            {/* {props.entries} */}
            </p>
            <form>
                <input id={props.current} name='currEntry' type="text" value={props.currEntry} onChange={props.onChange} />
                <button type='button' onClick={() => props.addEntry(props.current)}>Add</button>
            </form>
        </div>
    );
}

export default WeekCal;