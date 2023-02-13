import { createContext } from "react";

export const CurrentAddressContext = createContext({
  address: "",
  setAddress: () => {},
});
