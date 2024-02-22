import './weatherApp.css';
import DailyTemperature from './DailyTemperature';

function WeatherApp({weather}) {
  return (
    <>
        <h1 className="name">{weather.name}</h1>
        { weather.main?.temp && <DailyTemperature weather={weather}/> }
    </>
  )
}

export default WeatherApp