import React from 'react'

function Forecast({forecast, toggle}) {
    const {temp, weather} = forecast;
    const celsius = (`${Math.round(temp.min)}° - ${Math.round(temp.max)}° C`);
    const fahrenheit = (`${Math.round(((temp.min)*(9/5))+32)}° - ${Math.round(((temp.max)*(9/5))+32)}° F`);



    function convertDay(){
        let date = new Date(forecast.dt * 1000);
        let day = date.getDay();
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      
        return days[day];
    }

  return (
    <div className ="future">
        <h3 className="day">{convertDay()}</h3>
        <div className="miniIcon" style={{backgroundImage: `url(./icons/${weather[0].main}.svg)`}} ></div>
        <h4 className="minMax"> {toggle ? fahrenheit : celsius}</h4>
       
    </div>
  )
}

export default Forecast