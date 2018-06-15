import React, { Component } from 'react';
import './App.css';
import Calendar from './components/Calendar/Calendar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      monthView: true,
      weekView: false,
      date: [],
      month: '',
      day: '',
      year: '',
      dayOfWeek: ''
    };
  }

  componentDidMount() {
    var now = (new Date()).toString().split(' ')
    var dayOfWeek = now[0]
    var month = now[1]
    var day = now[2]
    var year = now[3]
    this.setState({ monthView: true, weekView: false, isLoaded: true, date: now, dayOfWeek: dayOfWeek, month: month, day: day, year: year });
  }

  render() {
    const { error, isLoaded} = this.state;
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
          <Calendar monthView={this.state.monthView} month={this.state.month} year={this.state.year} day={this.state.day} dayOfWeek={this.state.dayofWeek}/>
        </div>
      //   this.state.monthView ?
      //   {/* <MonthCal /> */ }
      //   <p className="App-intro">
      //     {this.state.year}
      //   </p>
      //     </div > :
      // {/* <WeekCal /> */ }
      // <div>
      //   Week cal
      // </div>
              
      );
    }
  }
}

export default App;
