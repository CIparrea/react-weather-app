import React from 'react'
import "./tempButton.css"

function TempButton({setToggle}) {
  return (
    <div className="button">
    <p className="buttonF">°F</p>
    <label className="switch">
      <input 
      type="checkbox"
      onClick = {()=> setToggle(prev => !prev)
      }
      />
      <span className="slider"/>
    </label>
    <p className="buttonC">°C</p>
    </div>
  )
}

export default TempButton