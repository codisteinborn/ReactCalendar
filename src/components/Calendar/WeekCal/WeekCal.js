import React from 'react';
import './WeekCal.css'
import EntryForm from '../../EntryForm/EntryForm';
import Entry from '../../Entry'


const WeekCal = props => {
    return (
        <div className="weekCell">
            <p className="date">
                {props.day}
            </p>
            <div className="entries">
                Calendar Entries:
                {props.entries.map(elem => <Entry key={elem} entry={elem} current={props.current} removeEntry={props.removeEntry} editEntry={props.editEntry}/>)}
            </div>
            <EntryForm onChange={props.onChange} onClick={props.addEntry} current={props.current} currEntry={props.currEntry}/>
        </div>
    );
}

export default WeekCal;