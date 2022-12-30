import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherTemperature from "./WeatherTemperature";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      minTemperature: response.data.main.temp_min,
      maxTemperature: response.data.main.temp_max,
      date: new Date(response.data.dt * 1000),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      timeStamp: response.data.dt * 1000,
      timezone: response.data.timezone / 3600,
      city: response.data.name,
      sunriseTime: response.data.sys.sunrise * 1000,
      sunsetTime: response.data.sys.sunset * 1000,
      geoLocationCity: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "9170c7a6ca4c9d0527cdae0958a1a497";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function getCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(retrievePosition);
  }

  function retrievePosition(position) {
    const apiKey = "9170c7a6ca4c9d0527cdae0958a1a497";
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <div className="row">
            <div className="col-8">
              <form id="search-form" onSubmit={handleSubmit}>
                <input
                  type="search"
                  className="form-control"
                  id="city-input"
                  placeholder="Enter a city..."
                  onChange={handleCityChange}
                />
              </form>
            </div>
            <div className="col-4">
              <button
                type="button"
                className="btn btn-outline-light"
                value="Search"
                id="search-icon"
                onClick={handleSubmit}
              >
                <i className="fa-solid fa-magnifying-glass search-icon"></i>
              </button>
              <button
                type="button"
                className="btn btn-outline-light"
                id="location-icon"
                onClick={getCurrentLocation}
              >
                <i className="fa-solid fa-location-dot location-icon"></i>
              </button>
            </div>
          </div>
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
                  //onClick={showCelsius}
                >
                  °C
                </button>
                <button
                  type="button"
                  className="btn btn-outline-light"
                  id="fahrenheit"
                  //onClick={showFahrenheit}
                >
                  °F
                </button>
              </div>
            </div>
          </div>
        </div>
        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
