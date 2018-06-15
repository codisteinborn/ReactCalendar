import React from 'react';
// import Moment from 'moment';
import MonthCal from './MonthCal/MonthCal.js';
import WeekCal from './WeekCal/WeekCal.js'

// class Calendar extends React.Component {
//     constructor(props, context) {
//         super(props, context);
//         this.state = {
//             monthView: this.props.monthView,
//             month: this.props.month
//         };
//     }



const Calendar = props => {

    return (
        props.monthView ?
            <div>
                {props.days.map(elem => <MonthCal day={elem._d.toString().substring(0, 10)} />)} </div> :
            // month={props.month} dayOfWeek={props.dayOfWeek} days={props.days}/>)} </div> :
            // <MonthCal month={props.month} day={props.day} dayOfWeek={props.dayOfWeek} days={props.days}/> :
            <WeekCal month={props.month} />
    )
}

export default Calendar;