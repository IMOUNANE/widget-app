import React, { useState } from "react";
import "./List.scss";
import Card from "../Card/Card";

export default function List() {
  const [cardList] = useState([{ name: "weather" }]);
  return (
    <div className="list">
      <ul>
        {cardList.map((item) => (
          <li>
            <Card name={item.name} data={item.data} />
          </li>
        ))}
      </ul>
    </div>
  );
}
