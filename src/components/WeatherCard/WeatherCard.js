import React, { useContext } from 'react';
import { WeatherContext } from '../../context/WeatherContext';
import WeatherIcons from '../WeatherIcons/WeatherIcons';
import './WeatherCard.style.scss';

function WeatherCard() {
  const { weatherData } = useContext(WeatherContext);
  const windSpeed = weatherData.wind.speed && weatherData.wind.speed.toString();
  const removeNumberAfterDot = (value) => {
    return value = value.toString().split(".")[0];
  }

  return (
    <>
      {
        weatherData && (
          <div className="weather-card">
            <div className="left-bar">
              <div className="left-bar-svg-box">
                <WeatherIcons condition={weatherData.weather[0].main} time={weatherData.weather[0].icon}/>
              </div>
              <h2 className="city-name">{weatherData.name}</h2>
              <p className="current-temp">{removeNumberAfterDot(weatherData.main.temp)} °C</p>
              <p className="max-min-temp">
                {removeNumberAfterDot(weatherData.main.temp_max)} °C 
                - {removeNumberAfterDot(weatherData.main.temp_min)} °C</p>
            </div>
            <div className="right-bar">
              <ul>
                <li>
                  <div className="right-bar-svg-box">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.005 512.005">
                      <path d="M327.159 2.766a10.641 10.641 0 0 0-14.313 0c-4.642 4.186-110.889 101.292-160.228 213.839-5.318-1.867-11.44-3.266-19.355-3.266-18.677 0-28.698 6.969-36.75 12.573-7.031 4.896-12.583 8.76-24.573 8.76-11.969 0-17.521-3.865-24.542-8.75-8.042-5.604-18.063-12.583-36.729-12.583A10.66 10.66 0 0 0 .002 224.006a10.66 10.66 0 0 0 10.667 10.667c11.969 0 17.521 3.865 24.542 8.75 8.042 5.604 18.063 12.583 36.729 12.583 18.677 0 28.708-6.979 36.76-12.583 7.031-4.885 12.583-8.75 24.563-8.75 12 0 17.563 3.865 24.604 8.76 8.052 5.604 18.083 12.573 36.771 12.573 18.677 0 28.708-6.969 36.771-12.573 7.031-4.896 12.594-8.76 24.594-8.76a10.66 10.66 0 0 0 10.667-10.667 10.66 10.66 0 0 0-10.667-10.667c-18.687 0-28.719 6.969-36.781 12.573-7.031 4.896-12.594 8.76-24.583 8.76-11.208 0-16.823-3.419-23.242-7.854 40.121-92.661 123.661-177.466 148.607-201.49 33.219 32.01 170.667 171.865 170.667 294.677 0 94.104-76.563 170.667-170.667 170.667-42.477 0-82.669-15.822-113.78-43.758 11.542-2.138 18.994-7.177 25.186-11.482 7.031-4.896 12.594-8.76 24.594-8.76 5.896 0 10.667-4.771 10.667-10.667s-4.771-10.667-10.667-10.667c-18.687 0-28.719 6.969-36.781 12.573-7.031 4.896-12.594 8.76-24.583 8.76-12 0-17.563-3.865-24.594-8.76-8.063-5.604-18.094-12.573-36.781-12.573-18.677 0-28.698 6.969-36.75 12.573-7.031 4.896-12.583 8.76-24.573 8.76-11.969 0-17.521-3.865-24.542-8.75-8.042-5.604-18.063-12.583-36.729-12.583-5.896 0-10.667 4.771-10.667 10.667s4.771 10.667 10.667 10.667c11.969 0 17.521 3.865 24.542 8.75 8.042 5.604 18.063 12.583 36.729 12.583 18.677 0 28.708-6.979 36.76-12.583 7.031-4.885 12.583-8.75 24.563-8.75 12 0 17.563 3.865 24.604 8.76 4.345 3.023 9.414 6.355 15.961 8.865 36.6 42.996 89.655 67.708 146.174 67.708 105.865 0 192-86.135 192-192C512.003 171.641 334.701 9.589 327.159 2.766z" />
                      <path d="M10.669 362.672c11.969 0 17.521 3.865 24.542 8.75 8.042 5.604 18.063 12.583 36.729 12.583a10.66 10.66 0 0 0 10.667-10.667 10.66 10.66 0 0 0-10.667-10.667c-11.969 0-17.521-3.865-24.542-8.75-8.042-5.604-18.063-12.583-36.729-12.583-5.896 0-10.667 4.771-10.667 10.667s4.771 10.667 10.667 10.667zm122.594-21.333c-5.896 0-10.667 4.771-10.667 10.667s4.771 10.667 10.667 10.667c12 0 17.563 3.865 24.594 8.76 8.063 5.604 18.094 12.573 36.781 12.573 18.677 0 28.708-6.969 36.771-12.573 7.031-4.896 12.594-8.76 24.594-8.76 12.198 0 18.406 3.969 26.25 8.99 9.052 5.781 19.313 12.344 37.75 12.344a10.66 10.66 0 0 0 10.667-10.667 10.66 10.66 0 0 0-10.667-10.667c-12.198 0-18.406-3.969-26.25-8.99-9.052-5.781-19.313-12.344-37.75-12.344-18.687 0-28.719 6.969-36.781 12.573-7.031 4.896-12.594 8.76-24.583 8.76-12 0-17.563-3.865-24.604-8.76-8.053-5.605-18.084-12.573-36.772-12.573zm0-64c-18.677 0-28.698 6.969-36.75 12.573-7.031 4.896-12.583 8.76-24.573 8.76-11.969 0-17.521-3.865-24.542-8.75-8.042-5.604-18.063-12.583-36.729-12.583A10.66 10.66 0 0 0 .002 288.006a10.66 10.66 0 0 0 10.667 10.667c11.969 0 17.521 3.865 24.542 8.75 8.042 5.604 18.063 12.583 36.729 12.583 18.677 0 28.708-6.979 36.76-12.583 7.031-4.885 12.583-8.75 24.563-8.75a10.66 10.66 0 0 0 10.667-10.667 10.66 10.66 0 0 0-10.667-10.667zm98.146 30.093c7.031-4.896 12.594-8.76 24.594-8.76 11.969 0 17.521 3.865 24.542 8.75 8.042 5.604 18.063 12.583 36.729 12.583 18.677 0 28.708-6.979 36.76-12.583 7.031-4.885 12.583-8.75 24.563-8.75a10.66 10.66 0 0 0 10.667-10.667 10.66 10.66 0 0 0-10.667-10.667c-18.677 0-28.698 6.969-36.75 12.573-7.031 4.896-12.583 8.76-24.573 8.76-11.969 0-17.521-3.865-24.542-8.75-8.042-5.604-18.063-12.583-36.729-12.583-18.687 0-28.719 6.969-36.781 12.573-7.031 4.896-12.594 8.76-24.583 8.76-5.896 0-10.667 4.771-10.667 10.667s4.771 10.667 10.667 10.667c18.676 0 28.707-6.969 36.77-12.573z" />
                    </svg>
                  </div>
                  <div className="weather-info">
                    <h3>Humidity</h3>
                    <p>{weatherData.main.humidity}</p>
                  </div>
                </li>
                <li>
                  <div className="right-bar-svg-box">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129">
                      <path d="M64.5 92.6c15.5 0 28-12.6 28-28s-12.6-28-28-28-28 12.6-28 28 12.5 28 28 28zm0-47.9c11 0 19.9 8.9 19.9 19.9 0 11-8.9 19.9-19.9 19.9s-19.9-8.9-19.9-19.9c0-11 8.9-19.9 19.9-19.9zM68.6 23.6V10.7c0-2.3-1.8-4.1-4.1-4.1s-4.1 1.8-4.1 4.1v12.9c0 2.3 1.8 4.1 4.1 4.1s4.1-1.8 4.1-4.1zM60.4 105.6v12.9c0 2.3 1.8 4.1 4.1 4.1s4.1-1.8 4.1-4.1v-12.9c0-2.3-1.8-4.1-4.1-4.1s-4.1 1.8-4.1 4.1zM96.4 38.5l9.1-9.1c1.6-1.6 1.6-4.2 0-5.8-1.6-1.6-4.2-1.6-5.8 0l-9.1 9.1c-1.6 1.6-1.6 4.2 0 5.8.8.8 1.8 1.2 2.9 1.2s2.1-.4 2.9-1.2zM23.5 105.6c.8.8 1.8 1.2 2.9 1.2 1 0 2.1-.4 2.9-1.2l9.1-9.1c1.6-1.6 1.6-4.2 0-5.8-1.6-1.6-4.2-1.6-5.8 0l-9.1 9.1c-1.6 1.6-1.6 4.2 0 5.8zM122.5 64.6c0-2.3-1.8-4.1-4.1-4.1h-12.9c-2.3 0-4.1 1.8-4.1 4.1s1.8 4.1 4.1 4.1h12.9c2.2 0 4.1-1.8 4.1-4.1zM10.6 68.7h12.9c2.3 0 4.1-1.8 4.1-4.1s-1.8-4.1-4.1-4.1H10.6c-2.3 0-4.1 1.8-4.1 4.1s1.9 4.1 4.1 4.1zM102.6 106.8c1 0 2.1-.4 2.9-1.2 1.6-1.6 1.6-4.2 0-5.8l-9.1-9.1c-1.6-1.6-4.2-1.6-5.8 0-1.6 1.6-1.6 4.2 0 5.8l9.1 9.1c.8.8 1.9 1.2 2.9 1.2zM38.4 38.5c1.6-1.6 1.6-4.2 0-5.8l-9.1-9.1c-1.6-1.6-4.2-1.6-5.8 0-1.6 1.6-1.6 4.2 0 5.8l9.1 9.1c.8.8 1.8 1.2 2.9 1.2s2.1-.4 2.9-1.2z" />
                    </svg>
                  </div>
                  <div className="weather-info">
                    <h3>Feels Like</h3>
                    <p>{removeNumberAfterDot(weatherData.main.feels_like)}</p>
                  </div>
                </li>
              <li>
                  <div className="right-bar-svg-box">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 368 368">
                      <path d="M296 48c-39.704 0-72 32.304-72 72 0 4.416 3.576 8 8 8s8-3.584 8-8c0-30.88 25.128-56 56-56s56 25.12 56 56-25.128 56-56 56H8c-4.416 0-8 3.584-8 8s3.584 8 8 8h288c39.704 0 72-32.304 72-72s-32.296-72-72-72z" />
                      <path d="M144 32c-30.88 0-56 25.12-56 56 0 4.416 3.584 8 8 8s8-3.584 8-8c0-22.056 17.944-40 40-40s40 17.944 40 40-17.944 40-40 40H8c-4.416 0-8 3.584-8 8s3.584 8 8 8h136c30.88 0 56-25.12 56-56s-25.12-56-56-56zm136 192H8c-4.416 0-8 3.584-8 8s3.584 8 8 8h272c22.056 0 40 17.944 40 40s-17.944 40-40 40-40-17.944-40-40c0-4.416-3.576-8-8-8s-8 3.584-8 8c0 30.88 25.128 56 56 56s56-25.12 56-56-25.128-56-56-56z" />
                    </svg>
                  </div>
                  <div className="weather-info">
                    <h3>Wind Speed</h3>
                    <p>{windSpeed.slice(0,3)}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        )
      }
    </>
  )
}

export default WeatherCard;
