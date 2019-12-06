import React from 'react';
import Calendar from 'react-calendar';
import TileContent from 'react-calendar'
import './calendar.css'
 
export default class TheCalendar extends React.Component {
  state = {
    date: new Date(),
  }
 
  onChange = date => this.setState({ date })

  
 
  render() {
    return (
      <div>
        <Calendar
            className= "calendar"
            calendarType= "US"
            minDetail= "decade"
            navigationAriaLabel= "Go up"
            onChange={this.onChange}
            value={this.state.date}
            // onClickDay={ () => }
            tileClassName= "monday"
        />
        {/* <TileContent 
        
        /> */}
      </div>
    );
  }
}