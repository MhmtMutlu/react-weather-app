import React, { useContext } from 'react';
import { WeatherContext } from '../../context/WeatherContext';
import './SearchBar.style.scss';

function SearchBar() {
  const { searchCity } = useContext(WeatherContext);
  return (
    <div className="search-bar">
      <input className="search-bar-input" type="search" onChange={searchCity} placeholder="Search by city name..."/>
    </div>
  )
}

export default SearchBar;
