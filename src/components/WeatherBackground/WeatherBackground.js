import './WeatherBackground.style.scss';

function WeatherBackground(props) {
  let image = null;
  let time = props.time.includes("n") ? "-night" : "";
  let condition = "";

  switch (props.condition) {
    case "Clear":
      condition = "clear";
      break;
    case "Clouds":
      condition = "cloudy";
      break;
    case "Mist":
    case "Smoke":
    case "Dust":
    case "Haze":
    case "Fog":
    case "Sand":
    case "Ash":
    case "Squall":
    case "Tornado":
      condition = "fog";
      break;
    case "Snow":
      condition = "snow";
      break;
    case "Rain":
      condition = "rain";
      break;
    case "Drizzle":
      condition = "rain";
      break;
    case "Thunderstorm":
      condition = "thunderstorm";
      break;
    default:
      break;
  }

  if (props.condition) {
    const divStyle = {
      backgroundImage: `url('/backgrounds/${condition}${time}.jpg')`
    };
    image = <div className="background" style={divStyle} />;
  }
  
  return image;
}

export default WeatherBackground;
