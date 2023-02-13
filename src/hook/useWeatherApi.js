import { useEffect, useState } from "react";
import axios from "axios";

export function useWeatherApi(location) {
  const KELVIN = 273;

  const [weather, setWeather] = useState({
    iconId: "unknown",
    description: "la description n'est pas renseigné",
    city: "la vile n'est pas renseigné",
    temperature: { value: "~" },
  });

  const fetchWeather = async () => {
    try {
      const data = await axios
        .create({
          baseURL: "http://api.openweathermap.org/data/2.5",
          timeout: 20000,
        })
        .get(
          `weather?q=${location}&appid=${process.env.REACT_APP_WEATHER_KEY}`
        );

      if (data) {
        setWeather({
          ...weather,
          temperature: { value: Math.floor(data.data.main.temp - KELVIN) },
          description: data.data.weather[0].description,
          iconId: data.data.weather[0].icon,
          city: data.data.name,
          country: data.data.sys.country,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [location]);

  return { weather };
}
