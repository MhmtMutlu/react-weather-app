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
              <div className="svg-box">
                <WeatherIcons condition={weatherData.weather[0].main} time={weatherData.weather[0].icon}/>
              </div>
              <h1>{weatherData.name}</h1>
              <p>{weatherData.main.temp}°C</p>
              <p>{weatherData.main.temp_max}°C - {weatherData.main.temp_min}°C</p>
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
