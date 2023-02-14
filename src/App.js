import React, { useState } from "react";
import "./App.scss";

import { CurrentAddressContext } from "./context/AddressContext";

import { ComboboxSearchAddress } from "./components/ComboboxSearchAddress/ComboboxSearchAddress";
import List from "./components/List/List";

function App() {
  const [address, setAddress] = useState("");

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
          <List />
        </main>
      </div>
    </CurrentAddressContext.Provider>
  );
}

export default App;
