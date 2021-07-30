import React, { useContext, useEffect, useState } from 'react';
import { WeatherContext } from '../../context/WeatherContext';
import axios from 'axios';
import DailyWeatherCards from '../DailyWeatherCards/DailyWeatherCards';
import './DailyWeather.style.scss';

function DailyWeather() {
  const { weatherData } = useContext(WeatherContext);
  const [dailyWeather, setDailyWeather] = useState();

  const LATITUDE = weatherData.coord.lat;
  const LONGITUDE = weatherData.coord.lon;

  const BASE_URL = "https://api.openweathermap.org/data/2.5/";
  const url = `${BASE_URL}onecall?lat=${LATITUDE}&lon=${LONGITUDE}&exclude=minutely,hourly&appid=${process.env.REACT_APP_API_KEY}`;

  let today = new Date().getDay();
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let removedDays = days.slice(today);
  for (let index = removedDays.length; index > 0; index--) {
    days.unshift(removedDays[index - 1])
  }

  useEffect(() => {
    
    const searchTimeout = setTimeout(() => {
      axios.get(url)
        .then(response => setDailyWeather(response.data))
    }, 1000);

    return () => {
      clearTimeout(searchTimeout);
    }
    
  }, [url]);

  return (
    <>
      <div className="daily-weather-card">
        {
          dailyWeather && dailyWeather.daily?.map((day, index) => (
            index !== 0 && <DailyWeatherCards 
              day={day} 
              dayNames={days}
              indexOfDay = {index}
              key={index} 
            />
          ))
        }
      </div>
    </>
  )
}

export default DailyWeather;
