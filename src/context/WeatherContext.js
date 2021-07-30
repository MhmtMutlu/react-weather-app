import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const WeatherContext = React.createContext();

function WeatherContextProvider({ children }) {
  const [cityName, setCityName] = useState("istanbul");
  const [weatherData, setWeatherData] = useState();
  const BASE_URL = "https://api.openweathermap.org/data/2.5/";
  const url = `${BASE_URL}weather?q=${cityName}&units=metric&appid=${process.env.REACT_APP_API_KEY}`;

  useEffect(() => {
    
    const searchTimeout = setTimeout(() => {
      axios.get(url)
        .then(response => setWeatherData(response.data))
    }, 500);

    return () => {
      clearTimeout(searchTimeout);
    }
    
  }, [url]);

  const searchCity = (e) => {
    setCityName(e.target.value);
  }

  return (
    <WeatherContext.Provider value={{weatherData, searchCity}}>
      {children}
    </WeatherContext.Provider>
  )
}

export default WeatherContextProvider;
