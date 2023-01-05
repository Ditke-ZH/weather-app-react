import React from "react";
import { getTime } from "./library";

export default function SunriseSunsetTime(props) {
  let sunriseFormatTime = getTime(props.sunriseTime, props.timezone);
  let sunsetFormatTime = getTime(props.sunsetTime, props.timezone);

  return (
    <div className="SunriseSunsetTime SunriseSunsetWrapper">
      <div className="container">
        <div className="row row-2">
          <div className="col">
            <div>
              <i className="fa-solid fa-sunrise middle-icon sunrise-icon"></i>{" "}
            </div>
            <div className="sunriseTime">
              Sunrise | <span className="timeDisplay">{sunriseFormatTime}</span>
            </div>
          </div>
          <div className="col-5"></div>
          <div className="col">
            <div>
              <i className="fa-solid fa-sunset middle-icon sunset-icon"></i>
            </div>
            <div className="sunsetTime">
              Sunset | <span className="timeDisplay">{sunsetFormatTime}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
