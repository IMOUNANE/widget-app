import React, { useContext } from "react";
import { CurrentAddressContext } from "../../../context/AddressContext";
import { useWeatherApi } from "../../../hook/useWeatherApi";

export default function Weather() {
  const { address } = useContext(CurrentAddressContext);
  const { weather } = useWeatherApi(address.city);

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
