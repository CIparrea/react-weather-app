import './App.css';
import WeatherApp from './WeatherApp';
import { useEffect, useState } from 'react';
import axios from 'axios';


function App() {
  const [weather, setWeather] = useState({});
  
  
  const handleSubmitForCity = async () => {
    let city = "New York";
    const resp = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric`);
    setWeather(resp.data)
    console.log(resp.data)
  }
  
  useEffect(()=>{
    handleSubmitForCity()
  },[]);
  
  return (
    <div className="App">
      <div className="bodyBackground">
        <WeatherApp weather={weather}/>  
      </div>
      <div className="credits">
        <a href="https://github.com/CIparrea/WeatherApp">Cesar Iparrea's GitHub</a>
      </div>
    </div>
  );
}

export default App;
