import { useEffect, useState } from "react";
import axios from "axios";

export function useUniversity(city) {
  const [universities, setUniversities] = useState([]);

  const fetchUniversity = async () => {
    try {
      const data = await axios
        .create({
          baseURL: "http://universities.hipolabs.com/",
          timeout: 20000,
        })
        .get(`/search?name=${city}&contry=France`);

      if (data) {
        setUniversities(data.data.slice(0, 5));
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUniversity();
  }, [city]);

  return { universities };
}
