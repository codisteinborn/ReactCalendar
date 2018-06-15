import React from 'react';

const Calendar = props => (
    props.monthView ?
        <div>
            {props.year}
        </div> :
        <div>
            na
        </div>
);


export default Calendar;