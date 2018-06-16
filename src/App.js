import React, { Component } from 'react';
import moment from 'moment';
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
      arrDays.push(current);
      daysInMonth--;
    }
    this.setState({ monthView: true, isLoaded: true, date: now, dayOfWeek: dayOfWeek, month: month, day: day, year: year, days: arrDays.reverse() });
  }

  monthSelect = () => {
    this.setState({ monthView: true });
  }

  weekSelect = () => {
    this.setState({ monthView: false });
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
      arrDays.push(current);
      daysInMonth--;
    }
    this.setState({ month: newMonth, year: newYear, days : arrDays.reverse() })
  }
  nextMonth = () => {
    var newMonth = '';
    var newYear = ''
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
      arrDays.push(current);
      daysInMonth--;
    }
    this.setState({ month: newMonth, year: newYear, days : arrDays.reverse() })
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
          <h1 className="App-title">Calendar</h1>
          <button id="month" onClick={() => this.monthSelect()}>Month View</button>
          <button id="week" onClick={() => this.weekSelect()}>Week View</button>
          <div>
            <button id="lastMonth" onClick={() => this.lastMonth()}> last </button>
            <h2>{moment(this.state.month.toString()).format('MMMM')} {this.state.year} </h2>
            <button id="nextMonth" onClick={() => this.nextMonth()}> next </button>
          </div>
          <Calendar monthView={this.state.monthView} days={this.state.days} month={this.state.month} year={this.state.year} day={this.state.day} dayOfWeek={this.state.dayofWeek} />
        </div>
      );
    }
  }
}

export default App;
