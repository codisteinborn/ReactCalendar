import React from 'react';
import './WeekCal.css'
import EntryForm from '../../EntryForm/EntryForm';


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
                {props.entries}
            </p>
            {/* <form>
                <input id={props.current} name='currEntry' type="text" value={props.currEntry} onChange={props.onChange} />
                <button type='button' onClick={() => props.addEntry(props.current)}>Add</button>
            </form> */}
            <EntryForm onChange={props.onChange} onClick={props.addEntry} current={props.current} currEntry={props.currEntry}/>
        </div>
    );
}

export default WeekCal;