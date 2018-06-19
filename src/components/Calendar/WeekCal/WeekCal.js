import React from 'react';
import './WeekCal.css'
import EntryForm from '../../EntryForm/EntryForm';


const WeekCal = props => {
    return (
        <div className="weekCell">
            <p>
                {props.day}
            </p>
            <div>
                Calendar Entries:
                {props.entries.map(elem => <div key={elem} entry={elem}><p>{elem}</p> <button onClick={() => props.removeEntry(elem.toString())}>Remove</button></div>)}
            </div>
            <EntryForm onChange={props.onChange} onClick={props.addEntry} current={props.current} currEntry={props.currEntry}/>
        </div>
    );
}

export default WeekCal;