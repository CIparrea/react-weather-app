import {React, useEffect, useState} from 'react';
import './weatherApp.css';
import SearchBar from './SearchBar';
import DailyTemperature from './DailyTemperature';
import axios from 'axios';

function WeatherApp({weather}) {
  // const [city, setCity] = useState("");
  // let daily = weather;
  // console.log(`this is my weather: ${weather}`)
  return (
    <div className="weatherApp">
        <SearchBar/>
        <h1 className="name">{weather.name}</h1>
        { weather.main?.temp && <DailyTemperature weather={weather}/> }
    </div>
  )
}

export default WeatherApp