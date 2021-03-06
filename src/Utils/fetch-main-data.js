import React from "react";

export const getDecodingData = async (searchText, setGeoDecoding) => {
  try {
    let response = await fetch(
      `https://api.tomtom.com/search/2/geocode/${searchText}.json?key=CuGs9mp6heEL1G43gjG4lAyeBdCe6RrF&typeahead=false`
    );
    const datas = await response.json();
    console.log(datas);
    return setGeoDecoding(datas);
  } catch (error) {
    console.log(error);
  }
};

export const getWeatherData = async (lat, lon, setWeatherData) => {
  try {
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=1ba827f5422d4bcde550e329ac63e757&units=metric`
    );
    const weatherResponse = await response.json();
    console.log(weatherResponse);
    return setWeatherData(weatherResponse);
  } catch (error) {
    console.log(error);
  }
};
