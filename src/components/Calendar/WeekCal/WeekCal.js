import React from 'react';
import './WeekCal.css'


const WeekCal = props => {
    const handleSubmit = function () {
        localStorage.setItem(props.day, props.entries);
    }
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
                <input id='entries' name='entries' type="text" value={props.entries} onChange={props.onChange} />
                <button onSubmit={handleSubmit()}>Add</button>
            </form>
        </div>
    );
}

export default WeekCal;