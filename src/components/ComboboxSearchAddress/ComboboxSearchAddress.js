import { useEffect } from "react";
import { useState } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
} from "react-places-autocomplete";
import { keysToCamel } from "../../utils/keysToCamel";

export function ComboboxSearchAddress({
  placeholder,
  name,
  onChange,
  onClick,
  value,
}) {
  const [address, setAddress] = useState({ searchAddress: "" });

  const parseAddress = (components, filter) => {
    const dataToParse = components.filter((component) =>
      component.types.includes(filter)
    )?.[0];

    return dataToParse && keysToCamel(dataToParse).longName;
  };

  const handleChange = (address) => {
    geocodeByAddress(address)
      .then((results) => {
        const components = results[0].address_components;
        const postalCode = parseAddress(components, "postal_code");
        const streetNumber = parseAddress(components, "street_number");
        const streetName = parseAddress(components, "route");
        const city = parseAddress(components, "locality");
        const searchValue = results[0].formatted_address || address;

        setAddress({ postalCode, streetNumber, streetName, city, searchValue });
        onChange({ postalCode, streetNumber, streetName, city, searchValue });
      })
      .catch(() => {
        setAddress({ searchValue: address });
        onChange({ searchValue: address });
      });
  };

  useEffect(() => {
    setAddress({ searchValue: value });
  }, [value]);

  return (
    <PlacesAutocomplete
      value={address.searchValue}
      onChange={handleChange}
      searchOptions={{
        componentRestrictions: {
          country: "fr",
        },
        types: ["geocode"],
      }}
      debounce={500}
    >
      {({ getInputProps, suggestions }) => {
        return (
          <div>
            <input
              id="input-address"
              name={name}
              {...getInputProps({
                placeholder,
              })}
              list="addressList"
              onClick={onClick}
            />
            <datalist id="addressList">
              {suggestions.map((suggestion) => {
                return <option value={suggestion.description} />;
              })}
            </datalist>
          </div>
        );
      }}
    </PlacesAutocomplete>
  );
}
