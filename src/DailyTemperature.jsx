import React from 'react'
import './dailyTemperature.css';
import TempButton from './TempButton.jsx';

function DailyTemperature({weather}) {
  return (
    <div className="container">
        <div className="daily">
            <div className="temperature">
                <div className="icon" style={{backgroundImage: `url(./icons/${weather.weather[0].main}.svg)`}}>
                  <div className="temp">
                  {Math.round((Number(weather.main.temp) * (9/5)) + 32)}
                  </div>
                  <div className="unit">
                    *F
                  </div>
                </div>
                <TempButton/>
            </div>
            <div className="conditions">
                <h3 className="condition">{weather.weather[0].main}</h3>
                <p className="Humidity">Humidity: {weather.main.humidity} %</p>
                <p className="Wind">Wind: {weather.wind.speed} km/h</p>
            </div>
        </div>
        <div className="forecast">

        </div>  
    </div>
  )
}

export default DailyTemperature