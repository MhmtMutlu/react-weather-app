import React, { useContext } from 'react';
import { WeatherContext } from '../../context/WeatherContext';

function WeatherCard() {
  const weatherData = useContext(WeatherContext);
  console.log(weatherData);

  return (
    <>
      {
        weatherData && 
        <div>
          <h1>{weatherData.name && weatherData.name}</h1>
          <p>{weatherData.main.temp && weatherData.main.temp}</p>
        </div>
      }
    </>
  )
}

export default WeatherCard;
