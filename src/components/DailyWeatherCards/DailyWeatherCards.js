import React from 'react';
import WeatherIcons from '../WeatherIcons/WeatherIcons';
import './DailyWeatherCards.style.scss';

function DailyWeatherCards({ day, dayNames, indexOfDay }) {
  const MAX_CELSIUS = (day.temp.max - 273.15).toString();
  const MIN_CELSIUS = (day.temp.min - 273.15).toString();
  
  return (
    <div className="daily-weather-cards">
      <h3>
        {
          indexOfDay === 7
            ?  dayNames[0]
            : dayNames[indexOfDay]
        }
      </h3>
      <div className="svg-box">
        <WeatherIcons condition={day.weather[0].main} time={day.weather[0].icon}/>
      </div>
      <p className="temp-data">{MAX_CELSIUS.slice(0, 2)} °C - {MIN_CELSIUS.slice(0, 2)} °C</p>
    </div>
  )
}

export default DailyWeatherCards;
