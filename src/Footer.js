import React from "react";
import "./Weather.css";

export default function Footer() {
  return (
    <div className="Forecast">
      <p className="footer">
        <a
          href="https://github.com/Ditke-ZH/weather-app-react"
          target="_blank"
          rel="noopener noreferrer"
          title="Open-source code"
          id="personal-link"
        >
          Open-source code
        </a>{" "}
        by{" "}
        <a
          href="https://www.linkedin.com/in/edit-guntermann-563357104"
          target="_blank"
          rel="noopener noreferrer"
          title="Edit Guntermann"
          id="personal-link"
        >
          Edit Guntermann
        </a>
      </p>
    </div>
  );
}
