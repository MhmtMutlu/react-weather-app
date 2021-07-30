import DailyWeather from "./components/DailyWeather/DailyWeather";
import SearchBar from "./components/SearchBar/SearchBar";
import WeatherCard from "./components/WeatherCard/WeatherCard";
import WeatherContextProvider from "./context/WeatherContext";
import Layout from "./layout/Layout";

function App() {
  return (
    <WeatherContextProvider>
      <Layout>
        <SearchBar />
        <WeatherCard />
        <DailyWeather />
      </Layout>
    </WeatherContextProvider>
  );
}

export default App;
