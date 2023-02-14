import React from "react";
import "./Card.scss";
import University from "./template/University";
import Weather from "./template/Weather";

export default function Card({ name }) {
  const renderView = (name) => {
    switch (name) {
      case "weather":
        return <Weather />;
      case "university":
        return <University />;
      default:
        return null;
    }
  };

  return renderView(name);
}
