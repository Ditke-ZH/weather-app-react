import React, { useState } from "react";

export default function UnitConversion(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          °C
          <div className="row">
            <div className="col-8"></div>
            <div className="col-4">
              <div
                className="btn-group btn-group-sm"
                role="group"
                aria-label="..."
              >
                <button
                  type="button"
                  className="btn btn-outline-light"
                  id="celsius"
                  onClick={showCelsius}
                >
                  °C
                </button>
                <button
                  type="button"
                  className="btn btn-outline-light"
                  id="fahrenheit"
                  onClick={showFahrenheit}
                >
                  °F
                </button>
              </div>
            </div>
          </div>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(fahrenheit)}</span>
        <span className="unit">
          °F
          <div className="row">
            <div className="col-8"></div>
            <div className="col-4">
              <div
                className="btn-group btn-group-sm"
                role="group"
                aria-label="..."
              >
                <button
                  type="button"
                  className="btn btn-outline-light"
                  id="celsius"
                  onClick={showCelsius}
                >
                  °C
                </button>
                <button
                  type="button"
                  className="btn btn-outline-light"
                  id="fahrenheit"
                  onClick={showFahrenheit}
                >
                  °F
                </button>
              </div>
            </div>
          </div>
        </span>
      </div>
    );
  }
}
