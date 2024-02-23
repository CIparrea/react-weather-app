import "./App.css";
import WeatherApp from "./WeatherApp";
import SearchBar from "./SearchBar";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState("Tabasco");
  const [forecast, setForecast] = useState([]);
  const [count, setCount] = useState(0);

  const handleSubmitForCity = async () => {
    const resp = await axios(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
    );
    const fore = await axios(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${resp.data.coord.lat}&lon=${resp.data.coord.lon}&appid=${process.env.REACT_APP_FORECAST_KEY}&units=metric`
    )

    const daily = fore.data.daily.slice(1, 6)

    setWeather(resp.data);
    setForecast(daily);
  };

  useEffect(() => {
    handleSubmitForCity();
    setCity("");
  }, []);

  // useEffect(() => {
  //   if(count%6 === 0 && count>0){
  //     console.log("Call function AD")
  //   }
  //   setCount(prev => prev+1)
  //   setCity("");

  // }, [weather]);



  

  function handleContainerBackground() {
    if (weather.main?.temp) {
      let condition = weather?.weather[0]?.main;
  
      if (condition === "Clear") {
        return `linear-gradient(rgb(65, 153, 253), rgb(255, 255, 255))`;
      } else if (condition === "Clouds") {
        return `linear-gradient(rgb(65, 153, 253), rgb(255, 255, 255))`;
      } else if (condition === "Drizzle") {
        return `linear-gradient(rgb(59, 59, 59), rgb(255, 255, 255))`;
      } else if (condition === "Rain") {
        return `linear-gradient(rgb(32, 32, 32), rgb(255, 255, 255))`;
      } else if (condition === "Thunderstorm") {
        return `linear-gradient(rgb(5, 12, 30), rgb(255, 255, 255))`;
      } else if (condition === "Snow") {
        return `linear-gradient(rgb(188, 239, 255), rgb(255, 255, 255))`;
      } else {
        return `linear-gradient(rgb(65, 153, 253), rgb(255, 255, 255))`;
      }
    }
  }

  return (
    <div className="App">
      <div
        className="bodyBackground"
        style={{ background: handleContainerBackground() }}
      >
        <div className="weatherApp">
          <SearchBar
            city={city}
            setCity={setCity}
            handleSubmitForCity={handleSubmitForCity}
          />
          <WeatherApp weather={weather} forecast={forecast}/>
        </div>
      </div>
      <div className="credits">
        <a href="https://github.com/CIparrea/WeatherApp">
          Cesar Iparrea's GitHub
        </a>
      </div>
    </div>
  );
}

export default App;
