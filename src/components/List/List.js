import React, { useState } from "react";
import Card from "../Card/Card";

export default function List() {
  const [cardList, setCardList] = useState([]);
  return (
    <div>
      <ul>
        {cardList.map(() => {
          <li>
            <Card></Card>
          </li>;
        })}
      </ul>
    </div>
  );
}
