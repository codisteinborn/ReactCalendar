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
      // days: [
      //   {
      //     day: 1,
      //     dayOfWeek: 'Monday',
      //     entries: []
      //   },
      //   {
      //     day: 2,
      //     dayOfWeek: 'Tuesday',
      //     entries: []
      //   }
      // ],
      date: [],
      month: '',
      days: [],
      day: '',
      year: '',
      dayOfWeek: '',
      dayNames: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
      monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
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
  while(daysInMonth) {
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

  monthDays = () => {
    if (this.state.month === '09' || this.state.month === '04' || this.state.month === '06' || this.state.month === '11') {
      this.setState({
        days: [
          { 1: 'one' },
          { 2: 'two' },
          { 3: 'three' }
        ]
      });
    }
    else if (this.state.month === '02') {
      this.setState({
        days: [
          { 1: 'one' },
          { 2: 'two' },
          { 3: 'three' },
          { 4: 'four' }
        ]
      });
    }
    else {
      this.setState({
        days: [
          { 1: 'one' },
          { 2: 'two' },
          { 3: 'three' },
          { 4: 'four' },
          { 5: 'five' }
        ]
      });
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
          <h1 className="App-title">Calendar</h1>
          <button id="month" onClick={() => this.monthSelect()}>Month</button>
          <button id="week" onClick={() => this.weekSelect()}>Week</button>
          <h2>{this.state.year} </h2>
          <Calendar monthView={this.state.monthView} days={this.state.days} month={this.state.month} year={this.state.year} day={this.state.day} dayOfWeek={this.state.dayofWeek} />
        </div>
      );
    }
  }
}

export default App;
