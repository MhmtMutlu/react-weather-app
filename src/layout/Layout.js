import React, { useContext } from 'react';
import WeatherBackground from '../components/WeatherBackground/WeatherBackground';
import { WeatherContext } from '../context/WeatherContext';
import './Layout.style.scss';

function Layout({ children }) {
  const { weatherData } = useContext(WeatherContext);
  return (
    <>
    {
      weatherData && (
        <>
          <WeatherBackground condition={weatherData.weather[0].main} time={weatherData.weather[0].icon} />
          <div className="layout">
            {children}
          </div>
        </>
      )
    }
    </>
  )
}

export default Layout;
