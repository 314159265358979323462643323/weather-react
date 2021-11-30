import WeatherListItem from './WeatherListItem';
import './App.css';
import React, { Component } from 'react';

class WeatherList extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render() {
    const { forecastDays, timezoneOffset, onDayClicked } = this.props;
    return (
      <div className ="weather-list flex-parent">
        { forecastDays.map((forecastDay, index) =>
          <WeatherListItem key={forecastDay.dt}
          forecastDay={forecastDay} index={index}
          timezoneOffset={timezoneOffset}
          onDayClicked={onDayClicked}
          />
        ) }
      </div>
    );
  }
}

export default WeatherList;
