import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import SunriseSunsetTime from "./SunriseSunsetTime";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 id="city" className="animate__animated animate__flip">
        {props.data.city}
      </h1>
      <h2>
        <div>
          <WeatherIcon code={props.data.icon} size={82} />
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
      <SunriseSunsetTime data={props.data} />

      <hr />
    </div>
  );
}
