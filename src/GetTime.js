import React from "react";

export default function getTime(timestamp, timeZone) {
  let date = new Date(timestamp);
  let hours = (date.getUTCHours() + timeZone + 24) % 24;
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <div>
      {hours}:{minutes}
    </div>
  );
}

export function SunriseSunsetTime(props) {
  let sunriseFormatTime = getTime(props.sunriseTime, props.timezone);
  let sunsetFormatTime = getTime(props.sunsetTime, props.timezone);

  return (
    <div className="SunriseSunsetTime SunriseSunsetWrapper">
      <div className="sunriseTime">
        sunrise <span className="timeDisplay">{sunriseFormatTime}</span>
      </div>
      <div className="sunsetTime">
        sunset <span className="timeDisplay">{sunsetFormatTime}</span>
      </div>
    </div>
  );
  getTime();
}
