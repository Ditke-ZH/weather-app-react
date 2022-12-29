import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 id="city" className="animate__animated animate__flip">
        {props.data.city}
      </h1>
      <h2>
        <div>
          <WeatherIcon code={props.data.icon} size={52} />
        </div>
      </h2>
      <div id="description" className="text-capitalize">
        {props.data.description}
      </div>
      <h3>
        <WeatherTemperature celsius={props.data.temperature} />
      </h3>
      <p className="date" id="current-date">
        <FormattedDate date={props.data.date} />
      </p>
      <div className="container" id="weather-properties">
        <div className="row row-2">
          <div className="col weather-properties">
            Wind speed: <span id="wind">{props.data.wind}</span> km/h
          </div>
          <div className="col weather-properties">
            Humidity: <span id="humidity">{props.data.humidity}</span>%
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row row-2">
          <div className="col">
            <div>
              <i className="fa-solid fa-sunrise middle-icon sunrise-icon"></i>{" "}
            </div>
            Sunrise | <span id="sunrise">06:05</span>
          </div>
          <div className="col-5"></div>
          <div className="col">
            <div>
              <i className="fa-solid fa-sunset middle-icon sunset-icon"></i>
            </div>
            Sunset | <span id="sunset">21:15</span>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}
