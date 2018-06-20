import React from 'react';
import './Entry.css'


const Entry = props => {
    return (
        <div className="entry" entry={props.entry}>
            <p>
                {props.entry}
            </p>
            <button className="entryBtn" onClick={() => props.editEntry(props.entry, props.current)}>Edit</button>
            <button className="entryBtn" onClick={() => props.removeEntry(props.entry, props.current)}>Delete</button>
        </div>
    );
}

export default Entry;