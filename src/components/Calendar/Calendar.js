import React from 'react';
// import Moment from 'moment';
import MonthCal from './MonthCal/MonthCal.js';
import WeekCal from './WeekCal/WeekCal.js'

const Calendar = props => {

    return (
        props.monthView ?
            <div>
                {props.days.map(elem => <MonthCal day={elem.current._d.toString().substring(0, 10)} entries={elem.entries} />)}
            </div> :
            // month={props.month} dayOfWeek={props.dayOfWeek} days={props.days}/>)} </div> :
            // <MonthCal month={props.month} day={props.day} dayOfWeek={props.dayOfWeek} days={props.days}/> :
            // <WeekCal month={props.month} />
            <div>
                {props.days.map(elem => <WeekCal day={elem.current._d.toString().substring(0, 10)} entries={elem.entries} />)}
            </div>
    )
}

export default Calendar;