import React from "react";
import "./Weather.css";
import Weather from "./Weather";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="weather-app-wrapper">
        <div className="weather-app">
          <Weather defaultCity="Zurich" />
          <Footer />
        </div>
      </div>
    </div>
  );
}
