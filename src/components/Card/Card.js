import React from "react";
import "./Card.scss";
import Weather from "./template/Weather";

export default function Card({ name }) {
  const renderView = (name) => {
    switch (name) {
      case "weather":
        return <Weather />;
      default:
        return null;
    }
  };

  return renderView(name);
}
