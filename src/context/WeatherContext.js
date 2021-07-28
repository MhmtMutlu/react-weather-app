import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const WeatherContext = React.createContext();

function WeatherContextProvider({ children }) {
  const [cityName, setCityName] = useState("Istanbul");
  const [weatherData, setWeatherData] = useState();
  const BASE_URL = "https://api.openweathermap.org/data/2.5/";
  const url = `${BASE_URL}weather?q=${cityName}&units=metric&appid=${process.env.REACT_APP_API_KEY}`;

  useEffect(() => {
    axios.get(url)
      .then(response => setWeatherData(response.data))
  }, [cityName])

  console.log(weatherData);
  return (
    <WeatherContext.Provider value={weatherData}>
      {children}
    </WeatherContext.Provider>
  )
}

export default WeatherContextProvider
