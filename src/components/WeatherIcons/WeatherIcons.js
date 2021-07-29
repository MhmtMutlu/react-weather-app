import React from 'react'

function WeatherIcons(props) {
  let time = props.time.includes("n") ? "nt_" : "";
  console.log(time);
  let icon = null;
  switch (props.condition) {
    case "Clear":
      icon = <img src={`/icons/white/svg/${time}clear.svg`} alt={props.condition} />;
      break;
    case "Clouds":
      icon = <img src={`/icons/white/svg/${time}cloudy.svg`} alt={props.condition} />;
      break;
    case "Atmosphere":
      icon = <img src={`/icons/white/svg/${time}fog.svg`} alt={props.condition} />;
      break;
    case "Snow":
      icon = <img src={`/icons/white/svg/${time}snow.svg`} alt={props.condition} />;
      break;
    case "Rain":
      icon = <img src={`/icons/white/svg/${time}rain.svg`} alt={props.condition} />;
      break;
    case "Drizzle":
      icon = <img src={`/icons/white/svg/${time}chancerain.svg`} alt={props.condition} />;
      break;
    case "Thunderstorm":
      icon = <img src={`/icons/white/svg/${time}tstorms.svg`} alt={props.condition} />;
      break;
    default:
      break;
  }
  return icon
}

export default WeatherIcons