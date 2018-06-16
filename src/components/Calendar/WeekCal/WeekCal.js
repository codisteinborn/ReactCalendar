import React from 'react';
import './WeekCal.css'


const WeekCal = props => (
    <div>
        <div className="weekCell">
            <p>
            {/* {props.day} */}
            </p>
            <p>
            Calendar Entries:
            {/* {props.entries} */}
            </p>
            <form>
                <input name='entries' onChange={this.handleChange}/>
                </form>
        </div>
    </div>
);

export default WeekCal;