import React, { useContext } from "react";
import "./Card.scss";

import { CurrentAddressContext } from "../../context/AddressContext";

export default function Card({ weather }) {
  const { address } = useContext(CurrentAddressContext);
  console.log("weather", weather);
  /*  console.log("address", weather, "../assets/weather-icons/${weather.iconsId}"); */
  return (
    <div className="card">
      <div className="card-weather__icons">
        <img
          src={`assets/weather-icons/${weather?.iconId}.png`}
          alt="weather"
        />
      </div>
      <div className="card-weather__value">
        <p>
          {weather?.temperature?.value}
          <span>C</span>
        </p>
      </div>
      <div className="card-weather__description">
        <p> {weather?.description}</p>
      </div>
      <div className="card-weather__city">
        <p> {weather?.city}</p>
      </div>
    </div>
  );
}
