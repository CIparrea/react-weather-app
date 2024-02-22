import './App.css';
import WeatherApp from './WeatherApp';
import SearchBar from './SearchBar'
import { useEffect, useState } from 'react';
import axios from 'axios';


function App() {
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState("Tabasco");
  
  const handleSubmitForCity = async () => {
    const resp = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric`);
    setWeather(resp.data)
  }
  
  useEffect(()=>{
    handleSubmitForCity()
    setCity("")
  },[]);
  
  return (
    <div className="App">
      <div className="bodyBackground">
        <div className="weatherApp">
          <SearchBar city={city} setCity={setCity} handleSubmitForCity={handleSubmitForCity}/>
          <WeatherApp weather={weather}/>  
        </div>
      </div>
      <div className="credits">
        <a href="https://github.com/CIparrea/WeatherApp">Cesar Iparrea's GitHub</a>
      </div>
    </div>
  );
}

export default App;
