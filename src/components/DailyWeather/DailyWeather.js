import React, { useContext, useEffect, useState } from 'react';
import { WeatherContext } from '../../context/WeatherContext';
import axios from 'axios';
import DailyWeatherCards from '../DailyWeatherCards/DailyWeatherCards';
import './DailyWeather.style.scss';

function DailyWeather() {
  const { weatherData } = useContext(WeatherContext);
  const LATITUDE = weatherData.coord.lat;
  const LONGITUDE = weatherData.coord.lon;
  const [dailyWeather, setDailyWeather] = useState();
  const BASE_URL = "https://api.openweathermap.org/data/2.5/";
  const url = `${BASE_URL}onecall?lat=${LATITUDE}&lon=${LONGITUDE}&exclude=minutely,hourly&appid=${process.env.REACT_APP_API_KEY}`;

  useEffect(() => {
    
    const searchTimeout = setTimeout(() => {
      axios.get(url)
        .then(response => setDailyWeather(response.data))
    }, 1000);

    return () => {
      clearTimeout(searchTimeout);
    }
    
  }, [url]);

  console.log(dailyWeather);

  return (
    <>
      <div className="daily-weather-card">
        {
          dailyWeather && dailyWeather.daily?.map((day, index) => (
            <DailyWeatherCards day={day} key={index} />
          ))
        }
      </div>
    </>
  )
}

export default DailyWeather;
