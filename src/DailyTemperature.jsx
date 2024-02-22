import {useState} from 'react'
import './dailyTemperature.css';
import TempButton from './TempButton.jsx';
import Forecast from './Forecast.jsx';


function DailyTemperature({weather, forecast}) {
  
  const [toggle,setToggle] = useState(true)

  return (
    <div className="container">
        <div className="daily">
            <div className="temperature">
                <div className="icon" style={{backgroundImage: `url(./icons/${weather.weather[0].main}.svg)`}}>
                  <div className="temp">
                  {toggle ? Math.round((Number(weather.main.temp) * (9/5)) + 32) : Math.round(weather.main.temp)}
                  </div>
                  <div className="unit">
                  {toggle ? "°F" : "°C"}
                  </div>
                </div>
                <TempButton setToggle={setToggle}/>
            </div>
            <div className="conditions">
                <h3 className="condition">{weather.weather[0].main}</h3>
                <p className="Humidity">Humidity: {weather.main.humidity} %</p>
                <p className="Wind">Wind: {weather.wind.speed} km/h</p>
            </div>
        </div>
        <div className="forecast">
            {forecast.map((forecast, idx) => (
                <Forecast forecast={forecast} key={idx} toggle={toggle}/>
            ))}
        </div>  
    </div>
  )
}

export default DailyTemperature