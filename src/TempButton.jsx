import React from 'react'
import "./tempButton.css"

function TempButton() {
  return (
    <div className="button">
    <p className="buttonF">°F</p>
    <label className="switch">
      <input type="checkbox"/>
      <span className="slider"/>
    </label>
    <p className="buttonC">°C</p>
    </div>
  )
}

export default TempButton