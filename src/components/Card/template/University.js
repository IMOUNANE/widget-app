import React, { useContext } from "react";
import { CurrentAddressContext } from "../../../context/AddressContext";
import { useUniversity } from "../../../hook/useUniversity";

export default function University() {
  const { address } = useContext(CurrentAddressContext);
  const { universities } = useUniversity(address.city);
  return (
    <div className="card">
      <h3>API universities hipolabs</h3>
      {universities.map((item, i) => (
        <div className="card-universities">
          <label>{item.name}</label>
          <a href={item.web_pages}>web site</a>
        </div>
      ))}
    </div>
  );
}
