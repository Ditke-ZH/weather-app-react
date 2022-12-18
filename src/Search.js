import React from "react";
import "./styles.css";

export default function Search() {
  return (
    <div className="search">
      <div className="container">
        <div className="row">
          <div className="col-8">
            <form id="search-form">
              <input
                type="text"
                className="form-control"
                id="city-input"
                placeholder="Enter a city"
              />
            </form>
          </div>
          <div className="col-4">
            <button
              type="button"
              className="btn btn-outline-light"
              id="search-icon"
            >
              <i className="fa-solid fa-magnifying-glass search-icon"></i>
            </button>
            <button
              type="button"
              className="btn btn-outline-light"
              id="location-icon"
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
              >
                °C
              </button>
              <button
                type="button"
                className="btn btn-outline-light"
                id="fahrenheit"
              >
                °F
              </button>
            </div>
          </div>
        </div>
      </div>
      ;
    </div>
  );
}
