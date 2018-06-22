import React from 'react';
import './EntryForm.css'
// import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

const EntryForm = props => {
// dow = () => {
//     for (var i = 0; i < props.currentWeek.length; i++){

//     }
// }
    return (
        // <div className='entryForm'> Add New Entry Here
        //     <FormGroup controlId="formControlsSelect">
        //         <ControlLabel>Select Day</ControlLabel>
        //         <FormControl componentClass="select" placeholder="select">
        //             {props.currWeek.map(elem => <option value={elem.current}>{elem.current.toString().slice(0, 15)}</option>)}
        //         </FormControl>
        //     </FormGroup>
        //     <FormGroup controlId="formControlsTextarea">
        //         <ControlLabel>Entry</ControlLabel>
        //         <FormControl componentClass="textarea" placeholder="textarea" name='currEntry' onChange={props.onChange} />
        //     </FormGroup>
        //     <button className="entryBtn" type='button' onClick={() => props.onClick(props.current)}>Add</button>
        <form>
           <input className="formInput" id={props.current} name={`currEntry${props.current.toString().slice(0,3)}`} type="text" value={props.currEntry + `${props.current.toString().slice(0,3)}`} onChange={props.onChange} />
            <button className="entryBtn" type='button' id={props.current} onClick={() => props.onClick(props.current)}>Add</button>
          </form> 
        // </div>
    );
}

export default EntryForm;