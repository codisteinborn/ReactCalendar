import React from 'react';
import './EntryForm.css'

const EntryForm = props => {
    return (
            <form>
                <input className="formInput" id={props.current} name="currEntry" type="text" value={props.currEntry} onChange={props.onChange} />
                <button className="entryBtn" type='button' onClick={() => props.onClick(props.current)}>Add</button>
            </form>

    );
}

export default EntryForm;