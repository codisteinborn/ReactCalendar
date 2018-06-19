import React from 'react';


const EntryForm = props => {
    return (
            <form>
                <input id={props.current} name='currEntry' type="text" value={props.currEntry} onChange={props.onChange} />
                <button type='button' onClick={() => props.onClick(props.current)}>Add</button>
            </form>

    );
}

export default EntryForm;