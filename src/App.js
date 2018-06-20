import React, { Component } from 'react';
import moment from 'moment';
import _ from 'underscore';
import './App.css';
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
    var now = (new Date()).toString().split(' ');
    var month = moment().format('MM');
    var day = moment().format('DD');
    var year = moment().format('YYYY');
    var daysInMonth = moment().daysInMonth();
    var arrDays = [];
    while (daysInMonth) {
      var current = moment().date(daysInMonth);
      if (localStorage.getItem(current.toString().slice(0, 15))) {
        var existEntries = []
        existEntries = localStorage.getItem(current.toString().slice(0, 15)).split(",");
        arrDays.push({ current: current, entries: existEntries })
      }
      else {
        arrDays.push({ current: current, entries: [] });
      }
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
    var daysInMonth = moment(newYear + "-" + newMonth).daysInMonth();
    var arrDays = [];
    while (daysInMonth) {
      var current = moment(newYear + "-" + newMonth).date(daysInMonth);
      if (localStorage.getItem(current.toString().slice(0, 15))) {
        var existEntries = []
        existEntries = localStorage.getItem(current.toString().slice(0, 15)).split(",");
        arrDays.push({ current: current, entries: existEntries })
      }
      else {
        arrDays.push({ current: current, entries: [] });
      }
      daysInMonth--;
    }
    this.setState({ month: newMonth, year: newYear, days: arrDays.reverse(), weeks: _.chunk(arrDays, 7), currentWeek: _.chunk(arrDays, 7)[0] })
  }

  nextMonth = () => {
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
    var daysInMonth = moment(newYear + "-" + newMonth).daysInMonth();
    var arrDays = [];
    while (daysInMonth) {
      var current = moment(newYear + "-" + newMonth).date(daysInMonth);
      if (localStorage.getItem(current.toString().slice(0, 15))) {
        var existEntries = []
        existEntries = localStorage.getItem(current.toString().slice(0, 15)).split(",");
        arrDays.push({ current: current, entries: existEntries })
      }
      else {
        arrDays.push({ current: current, entries: [] });
      }
      daysInMonth--;
    }
    this.setState({ month: newMonth, year: newYear, days: arrDays.reverse(), weeks: _.chunk(arrDays, 7), currentWeek: _.chunk(arrDays, 7)[0] })
  }

  lastWeek = () => {
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
      var daysInMonth = moment(newYear + "-" + newMonth).daysInMonth();
      var arrDays = [];
      while (daysInMonth) {
        var current = moment(newYear + "-" + newMonth).date(daysInMonth);
        if (localStorage.getItem(current.toString().slice(0, 15))) {
          var existEntries = []
          existEntries = localStorage.getItem(current.toString().slice(0, 15)).split(",");
          arrDays.push({ current: current, entries: existEntries })
        }
        else {
          arrDays.push({ current: current, entries: [] });
        }
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
    if (this.state.currentWeek === this.state.weeks[this.state.weeks.length - 1]) {
      console.log("here")
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
      var daysInMonth = moment(newYear + "-" + newMonth).daysInMonth();
      var arrDays = [];
      while (daysInMonth) {
        var current = moment(newYear + "-" + newMonth).date(daysInMonth);
        if (localStorage.getItem(current.toString().slice(0, 15))) {
          var existEntries = []
          existEntries = localStorage.getItem(current.toString().slice(0, 15)).split(",");
          arrDays.push({ current: current, entries: existEntries })
        }
        else {
          arrDays.push({ current: current, entries: [] });
        }
        daysInMonth--;
      }
      this.setState({ month: newMonth, year: newYear, days: arrDays.reverse(), weeks: _.chunk(arrDays, 7), currentWeek: _.chunk(arrDays, 7)[0] })
    }
    else if (this.state.currentWeek === this.state.weeks[0]) {
      console.log("there")
      this.setState({ currentWeek: this.state.weeks[1] });
    }
    else {
      console.log("y")
      for (var i = 0; i < this.state.weeks.length; i++) {
        console.log("x")
        if (this.state.currentWeek === this.state.weeks[i]) {
          console.log("z")
          this.setState({ currentWeek: this.state.weeks[i + 1] });
        }
      }
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
        this.state.days[i].entries.push(this.state.currEntry);
        this.setState({ entries: [...this.state.entries, this.state.currEntry], weeks: _.chunk(this.state.days, 7) })
      }
    }
    for (var j = 0; j < this.state.weeks.length; j++) {
      if (this.state.weeks[j].includes(currDay)) {
        this.setState({ currentWeek: this.state.weeks[j] });
      }
    }
    if (!localStorage.getItem(current.toString().slice(0, 15))) {
      localStorage.setItem(current.toString().slice(0, 15), [this.state.currEntry]);
    }
    else {
      var allEntries = [];
      allEntries.push(localStorage.getItem(current.toString().slice(0, 15)));
      allEntries.push(this.state.currEntry);
      localStorage.setItem(current.toString().slice(0, 15), allEntries);
    }
    this.setState({ currEntry: '' })
  }

  removeEntry = (entry, current) => {
    for (var i = 0; i < this.state.days.length; i++) {
      for (var j = 0; j < this.state.days[i].entries.length; j++) {
        if (this.state.days[i].entries[j].toString() === entry.toString()) {
          this.state.days[i].entries = this.state.days[i].entries.filter(e => e !== entry.toString());
          this.setState({ entries: this.state.entries.filter(e => e !== entry), weeks: _.chunk(this.state.days, 7) })
        }
      }
    }
    if (localStorage.getItem(current.toString().slice(0, 15))) {
      var allEntries = [];
      allEntries = localStorage.getItem(current.toString().slice(0, 15)).split(",")
      var newEntries = [];
      newEntries = allEntries.filter(e => e !== entry);
      localStorage.setItem(current.toString().slice(0, 15), newEntries);
    }
  }

  editEntry = (entry, current) => {
    this.setState({currEntry : entry})
    for (var i = 0; i < this.state.days.length; i++) {
      for (var j = 0; j < this.state.days[i].entries.length; j++) {
        if (this.state.days[i].entries[j].toString() === entry.toString()) {
          this.state.days[i].entries = this.state.days[i].entries.filter(e => e !== entry.toString());
          this.setState({ entries: this.state.entries.filter(e => e !== entry), weeks: _.chunk(this.state.days, 7) })
        }
      }
    }
    if (localStorage.getItem(current.toString().slice(0, 15))) {
      var allEntries = [];
      allEntries = localStorage.getItem(current.toString().slice(0, 15)).split(",")
      var newEntries = [];
      newEntries = allEntries.filter(e => e !== entry);
      localStorage.setItem(current.toString().slice(0, 15), newEntries);
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
          <div>
            <h1 className='head'>Calendar</h1>
            <div className='cal'>
              <div className="subHead">
                <button className="btn" id="month" onClick={() => this.monthSelect()}>Month View</button>
                <button className="btn" id="week" onClick={() => this.weekSelect()}>Week View</button>
                <h2 className='monthHead'>{moment(this.state.month.toString()).format('MMMM')} {this.state.year} </h2>
                <button className="btn" id="lastMonth" onClick={() => this.lastMonth()}>Prev Month</button>
                <button className="btn" id="nextMonth" onClick={() => this.nextMonth()}>Next Month</button>
              </div>
              {this.state.monthView ?
                <div>
                  {this.state.days.map(elem => <MonthCal key={elem.current} day={elem.current._d.toString().slice(0, 10)} current={elem.current} entries={elem.entries} onDoubleClick={this.daySelect} />)}
                </div> :
                <div>
                  <div>
                    <button className="btn" id="lastWeek" onClick={() => this.lastWeek()}>Prev Week</button>
                    <button className="btn nxtWk" id="nextWeek" onClick={() => this.nextWeek()}>Next Week</button>
                  </div>
                  <div>
                    {this.state.currentWeek.map(elem => <WeekCal key={elem.current} day={elem.current._d.toString().slice(0, 10)} current={elem.current} currEntry={this.state.currEntry} entries={elem.entries} onChange={this.handleInputChange} addEntry={this.addEntry} removeEntry={this.removeEntry} editEntry={this.editEntry}/>)}
                  </div>
                </div>}
            </div>
          </div>
        </div>
      );
    }
  }
}

export default App;
