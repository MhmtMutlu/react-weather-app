import WeatherContextProvider from "./context/WeatherContext";

function App() {
  return (
    <WeatherContextProvider>
      <div>
        hi
      </div>
    </WeatherContextProvider>
  );
}

export default App;
