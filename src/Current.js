import React from "react";
import "./styles.css";

export default function Current() {
  let weatherData = {
    city: "New York",
    temperature: 25,
    date: "Monday 18.11.2022",
    description: "Clear",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    humidity: 75,
    wind: 10,
  };
  return (
    <div className="Current">
      <h1 id="city" className="animate__animated animate__flip">
        {weatherData.city}
      </h1>
      <h2>
        <img
          src={weatherData.imgUrl}
          alt={weatherData.description}
          id="main-icon"
          className="float-left"
        />
      </h2>
      <div id="description">{weatherData.description}</div>
      <h3>
        <span id="temperature">{weatherData.temperature}</span>
      </h3>
      <p className="date" id="current-date">
        Last updated: {weatherData.date}
        <p className="time" id="current-time">
          13:55
        </p>
      </p>
      <div className="container" id="weather-properties">
        <div className="row row-2">
          <div className="col air-property">
            Wind speed
            <span id="wind">{weatherData.wind}</span> km/h
          </div>
          <div className="col">
            Humidity
            <span id="humidity">{weatherData.humidity}</span> %
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row row-2">
          <div className="col">
            <div>
              <i className="fa-solid fa-sunrise middle-icon sunrise-icon"></i>{" "}
            </div>
            Sunrise
            <span id="sunrise">06:05</span>
          </div>
          <div className="col-5"></div>
          <div className="col">
            <div>
              <i className="fa-solid fa-sunset middle-icon sunset-icon"></i>
            </div>
            Sunset
            <span id="sunset">21:15</span>
          </div>
        </div>
      </div>
    </div>
  );
}
