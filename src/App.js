import React, { Component } from 'react';
import moment from 'moment';
import _ from 'underscore';
import './App.css';
// import Calendar from './components/Calendar/Calendar';
import MonthCal from './components/Calendar/MonthCal';
import WeekCal from './components/Calendar/WeekCal';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      monthView: true,
      date: [],
      month: '',
      days: [],
      weeks: [],
      currentWeek: [],
      day: '',
      year: '',
      currEntry: '',
      entries: []
    };
  }

  componentDidMount() {
    var now = (new Date()).toString().split(' ')
    var month = moment().format('MM');
    var day = moment().format('DD');
    var year = moment().format('YYYY');
    var daysInMonth = moment().daysInMonth();
    var arrDays = [];
    while (daysInMonth) {
      var current = moment().date(daysInMonth);
      arrDays.push({ current: current, entries: [] });
      daysInMonth--;
    }
    this.setState({ monthView: true, isLoaded: true, date: now, month: month, day: day, year: year, days: arrDays.reverse(), weeks: _.chunk(arrDays, 7) });
  }

  monthSelect = () => {
    this.setState({ monthView: true });
  }

  weekSelect = () => {
    this.setState({ monthView: false, currentWeek: this.state.weeks[0] });
  }

  daySelect = (current) => {
    var currDay = this.state.days.find(e => e.current === current);
    for (var i = 0; i < this.state.weeks.length; i++) {
      if (this.state.weeks[i].includes(currDay)) {
        this.setState({ monthView: false, currentWeek: this.state.weeks[i] });
      }
    }
  }

  lastMonth = () => {
    var newMonth = '';
    var newYear = ''
    if (this.state.month < 2) {
      newMonth = '12';
      newYear = (Number(this.state.year) - 1).toString()
    }
    else {
      newMonth = (Number(this.state.month) - 1).toString();
      newYear = this.state.year
    }
    var daysInMonth = moment(newMonth).daysInMonth();
    var arrDays = [];
    while (daysInMonth) {
      var current = moment(newMonth).date(daysInMonth);
      arrDays.push({
        current: current
        // , entries :[]
      });
      daysInMonth--;
    }
    this.setState({ month: newMonth, year: newYear, days: arrDays.reverse(), weeks: _.chunk(arrDays, 7), currentWeek: _.chunk(arrDays, 7)[0] })
  }

  nextMonth = () => {
    var newMonth = '';
    var newYear = '';
    if (this.state.month > 11) {
      newMonth = '1';
      newYear = (Number(this.state.year) + 1).toString()
    }
    else {
      newMonth = (Number(this.state.month) + 1).toString();
      newYear = this.state.year
    }
    var daysInMonth = moment(newMonth).daysInMonth();
    var arrDays = [];
    while (daysInMonth) {
      var current = moment(newMonth).date(daysInMonth);
      arrDays.push({ current: current });
      daysInMonth--;
    }
    this.setState({ month: newMonth, year: newYear, days: arrDays.reverse(), weeks: _.chunk(arrDays, 7), currentWeek: _.chunk(arrDays, 7)[0] })
  }

  lastWeek = () => {
    // need to fix when month switches
    if (this.state.currentWeek === this.state.weeks[0]) {
      var newMonth = '';
      var newYear = '';
      if (this.state.month < 2) {
        newMonth = '12';
        newYear = (Number(this.state.year) - 1).toString()
      }
      else {
        newMonth = (Number(this.state.month) - 1).toString();
        newYear = this.state.year
      }
      var daysInMonth = moment(newMonth).daysInMonth();
      var arrDays = [];
      while (daysInMonth) {
        var current = moment(newMonth).date(daysInMonth);
        arrDays.push({ current: current });
        daysInMonth--;
      }
      this.setState({ month: newMonth, year: newYear, days: arrDays.reverse(), weeks: _.chunk(arrDays, 7), currentWeek: _.chunk(arrDays, 7)[this.state.weeks.length - 1] })

    }
    else {
      for (var i = 0; i < this.state.weeks.length; i++) {
        if (this.state.currentWeek === this.state.weeks[i]) {
          this.setState({ currentWeek: this.state.weeks[i - 1] });
        }
      }
    }
  }
  nextWeek = () => {
    if (this.state.currentWeek !== this.state.weeks[this.state.weeks.length - 1]) {
      for (var i = 0; i < this.state.weeks.length; i++) {
        if (this.state.currentWeek === this.state.weeks[i]) {
          this.setState({ currentWeek: this.state.weeks[i + 1] });
        }
      }
    }
    else {
      // need to fix when month switches
      var newMonth = '';
      var newYear = '';
      if (this.state.month > 11) {
        newMonth = '1';
        newYear = (Number(this.state.year) + 1).toString();
      }
      else {
        newMonth = (Number(this.state.month) + 1).toString();
        newYear = this.state.year;
      }
      var daysInMonth = moment(newMonth).daysInMonth();
      var arrDays = [];
      while (daysInMonth) {
        var current = moment(newMonth).date(daysInMonth);
        arrDays.push({ current: current });
        daysInMonth--;
      }
      this.setState({ month: newMonth, year: newYear, days: arrDays.reverse(), weeks: _.chunk(arrDays, 7), currentWeek: _.chunk(arrDays, 7)[0] })
    }
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  addEntry = (current) => {
    var currDay = this.state.days.find(e => e.current === current);
    for (var i = 0; i < this.state.days.length; i++) {
      if (this.state.days[i].current === currDay.current) {
        this.state.days[i].entries.push( this.state.currEntry);
        this.setState({entries: [...this.state.entries , this.state.currEntry] , weeks : _.chunk(this.state.days, 7)})
        localStorage.setItem(this.state.days[i], this.state.currEntry);
      }
    }
    for (var j = 0; j < this.state.weeks.length; j++) {
      if (this.state.weeks[j].includes(currDay)) {
        this.setState({ currentWeek: this.state.weeks[j] });
      }
    }
  }
  // removeEntry = () =>{

  // }

  render() {
    const { error, isLoaded } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    }
    else if (!isLoaded) {
      return <div>Loading...</div>;
    }
    else {
      return (
        <div>
          <div>
            <h1>Calendar</h1>
            <button id="month" onClick={() => this.monthSelect()}>Month View</button>
            <button id="week" onClick={() => this.weekSelect()}>Week View</button>
            <h2>{moment(this.state.month.toString()).format('MMMM')} {this.state.year} </h2>
            <button id="lastMonth" onClick={() => this.lastMonth()}>Prev Month</button>
            <button id="nextMonth" onClick={() => this.nextMonth()}>Next Month</button>
          </div>
          {/* <Calendar onChange={this.handleInputChange} monthView={this.state.monthView} days={this.state.days} weeks={this.state.weeks} currentWeek={this.state.currentWeek} lastMonth={() => this.lastMonth()} nextMonth={() => this.nextMonth()} lastWeek={() => this.lastWeek()} nextWeek={() => this.nextWeek()} month={this.state.month} day={this.state.day} date={this.state.month + this.state.day} /> */}
          {this.state.monthView ?
            <div>
              {this.state.days.map(elem => <MonthCal key={elem.current} day={elem.current._d.toString().slice(0, 10)} current={elem.current} entries={elem.entries} onDoubleClick={this.daySelect} />)}
            </div> :
            <div>
              <div>
                <button id="lastWeek" onClick={() => this.lastWeek()}>Prev Week</button>
                <button id="nextWeek" onClick={() => this.nextWeek()}>Next Week</button>
              </div>
              <div>
                {this.state.currentWeek.map(elem => <WeekCal key={elem.current} day={elem.current._d.toString().slice(0, 10)} current={elem.current} currEntry={this.state.currEntry} entries={elem.entries} onChange={this.handleInputChange} addEntry={this.addEntry} />)}
              </div>
            </div>}
        </div>
      );
    }
  }
}

export default App;
