import React, { useContext } from 'react';
import { WeatherContext } from '../../context/WeatherContext';
import WeatherIcons from '../WeatherIcons/WeatherIcons';
import './WeatherCard.style.scss';

function WeatherCard() {
  const weatherData = useContext(WeatherContext);
  console.log(weatherData);

  return (
    <>
      {
        weatherData && (
          <div className="weather-card">
            <div className="left-bar">
              <h1>City: {weatherData.name}</h1>
              <div className="svg-box">
                <WeatherIcons condition={weatherData.weather[0].main} time={weatherData.weather[0].icon}/>
              </div>
              <p>Temperature: {weatherData.main.temp}</p>
              <p>Temperature High-Low: {weatherData.main.temp_max} {weatherData.main.temp_min}</p>
            </div>
            <div className="right-bar">
              <p>Feels like: {weatherData.main.feels_like}</p>
              <p>Humidity: {weatherData.main.humidity}</p>
              <p>Wind: {weatherData.wind.speed}</p>
            </div>
          </div>
        )
      }
    </>
  )
}

export default WeatherCard;
