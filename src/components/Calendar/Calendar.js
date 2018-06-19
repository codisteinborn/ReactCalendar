import React from 'react';
import Moment from 'moment';
import MonthCal from './MonthCal/MonthCal.js';
import WeekCal from './WeekCal/WeekCal.js'

const Calendar = props => {
    // class Calendar extends React.Component {
    //     constructor(props, context) {
    //         super(props, context);
    //         this.handleChange = this.handleChange.bind(this);
    //         this.state = {
    //             monthView: this.props.monthView,
    //             days: this.props.days,
    //             weeks: this.props.weeks,
    //             lastMonth: this.props.lastMonth,
    //             nextMonth: this.props.nextMonth,
    //             month: this.props.month,
    //             day: this.props.day
    //         };
    //     }
    //     handleChange = (e) => {
    //         const { name, value } = e.target;
    //         this.setState({
    //             [name]: value
    //         });
    //     }
    // render() {
    return (
        props.monthView ?
            <div>
                {/* <button id="lastMonth" onClick={() => this.state.lastMonth()}>Prev Month</button>
                    <button id="nextMonth" onClick={() => this.state.nextMonth()}>Next Month</button> */}
                <div>
                    {props.days.map(elem => <MonthCal day={elem.current._d.toString().slice(0, 10)} entries={elem.entries} />)}
                </div>
            </div> :
            <div>
                <div>
                <button id="lastWeek" onClick={() => props.lastWeek()}>Prev Week</button>
                <button id="nextWeek" onClick={() => props.nextWeek()}>Next Week</button>
                </div>
                <div>
                    {props.currentWeek.map(elem => <WeekCal day={elem.current._d.toString().slice(0, 10)} entries={elem.entries} date={props.date} onChange={props.onChange}/>)}
                </div>
            </div>
    )
}
// }

export default Calendar;