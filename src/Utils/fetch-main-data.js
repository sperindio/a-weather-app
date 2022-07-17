import React from "react";

const getDecodingData = async (searchText, setGeoDecoding) => {
  try {
    let response = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${searchText}&limit=5&appid=1ba827f5422d4bcde550e329ac63e757`
    );
    const datas = await response.json();
    //console.log(datas);
    setGeoDecoding(datas);
  } catch (error) {
    console.log(error);
  }
};

export default getDecodingData;
