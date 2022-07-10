import React from "react";

const getDecodingData = (searchText, setGeoDecoding) => {
  try {
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${searchText}&limit=5&appid=1ba827f5422d4bcde550e329ac63e757`
    )
      .then((results) => results.json())
      .then((data) => setGeoDecoding(data));
  } catch (error) {
    console.log(error);
  }
};

export default getDecodingData;
