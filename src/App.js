import React, { Component } from 'react';
import moment from 'moment';
import _ from 'underscore';
import './App.css';
import Calendar from './components/Calendar/Calendar';

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
      dayOfWeek: ''
    };
  }

  componentDidMount() {
    var now = (new Date()).toString().split(' ')
    var dayOfWeek = moment().format('dddd');
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
    this.setState({ monthView: true, isLoaded: true, date: now, dayOfWeek: dayOfWeek, month: month, day: day, year: year, days: arrDays.reverse(), weeks: _.chunk(arrDays, 7) });
  }

  monthSelect = () => {
    this.setState({ monthView: true });
  }

  weekSelect = () => {
    this.setState({ monthView: false, currentWeek: this.state.weeks[0] });
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
      arrDays.push({ current: current, entries: [] });
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
      arrDays.push({ current: current, entries: [] });
      daysInMonth--;
    }
    this.setState({ month: newMonth, year: newYear, days: arrDays.reverse(), weeks: _.chunk(arrDays, 7), currentWeek: _.chunk(arrDays, 7)[0] })
  }

  lastWeek = () => {
    if (this.state.currentWeek === this.state.weeks[0]) {
      console.log("firstweek")
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
    if (this.state.currentWeek === this.state.weeks[this.state.weeks.length]) {
      nextMonth();
    }
    else {
      for (var i = 0; i < this.state.weeks.length; i++) {
        if (this.state.currentWeek === this.state.weeks[i]) {
          this.setState({ currentWeek: this.state.weeks[i + 1] });
        }
      }
    }
  }

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
          <h1>Calendar</h1>
          <button id="month" onClick={() => this.monthSelect()}>Month View</button>
          <button id="week" onClick={() => this.weekSelect()}>Week View</button>
          <div>
            <h2>{moment(this.state.month.toString()).format('MMMM')} {this.state.year} </h2>
            <button id="lastMonth" onClick={() => this.lastMonth()}>Prev Month</button>
            <button id="nextMonth" onClick={() => this.nextMonth()}>Next Month</button>
          </div>
          <Calendar monthView={this.state.monthView} days={this.state.days} weeks={this.state.weeks} currentWeek={this.state.currentWeek} lastMonth={() => this.lastMonth()} nextMonth={() => this.nextMonth()} lastWeek={() => this.lastWeek()} nextWeek={() => this.nextWeek()} month={this.state.month} day={this.state.day} />
        </div>
      );
    }
  }
}

export default App;
