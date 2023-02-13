import React, { useState } from "react";
import "./App.scss";

import { CurrentAddressContext } from "./context/AddressContext";
import { useWeatherApi } from "./hook/useWeatherApi";
import Card from "./components/Card/Card";
import { ComboboxSearchAddress } from "./components/ComboboxSearchAddress/ComboboxSearchAddress";

function App() {
  const [address, setAddress] = useState("");
  const { weather } = useWeatherApi(address.city);

  /*   console.log("setAddress", setAddress); */

  return (
    <CurrentAddressContext.Provider value={{ address, setAddress }}>
      <div className="App">
        <header className="App-header">
          <ComboboxSearchAddress
            label="Adresse postale*"
            name="address"
            value={address.searchValue}
            onChange={(address) => {
              setAddress(address);
            }}
            placeholder="Adresse"
          />
        </header>
        <main>
          <Card weather={weather}></Card>
        </main>
      </div>
    </CurrentAddressContext.Provider>
  );
}

export default App;
