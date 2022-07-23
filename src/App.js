import React, { useState, useEffect } from "react";
import SearchForm from "./Components/Search-form.component/search-form.component";
import Header from "./Components/Header/header.component";
import Footer from "./Components/Footer/footer.component";
import { getDecodingData, getWeatherData } from "./Utils/fetch-main-data";
import { OFFLINE_DATA, DAILY_DATA } from "./Assets/offline-data";
import WeatherPage from "./Pages/WeatherPage";
import "./App.css";

function App() {
  const [searchText, setSearchText] = useState("");
  const [dailyData, setDailyData] = useState(DAILY_DATA);
  const [weatherData, setWeatherData] = useState("");
  const [geoDecoding, setGeoDecoding] = useState([]);
  const [uniqueLocationData, setUniqueLocationData] = useState([]);

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    //The API request will be triggered only after the second charcater
    if (searchText.length > 2) {
      getDecodingData(searchText, setGeoDecoding);
    }
    console.log(searchText);
  }, [searchText]);

  const handleLocation = (local) => {
    setUniqueLocationData(local);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("This is the final state" + uniqueLocationData.name);
    console.log(uniqueLocationData);
    alert("A name was submitted: " + uniqueLocationData.name);
    setSearchText("");
    let lat = uniqueLocationData.lat;
    let lon = uniqueLocationData.lon;
    getWeatherData(lat, lon, setWeatherData);
    setGeoDecoding([]);
  };

  return (
    <React.Fragment>
      <Header />
      {weatherData ? (
        <WeatherPage weatherData={weatherData} dailyData={dailyData} />
      ) : (
        //{dailyData.map((daydata.weather.daily.lenght()) => <MainCard {...daydata} />)}
        <SearchForm
          searchText={searchText}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          geo={geoDecoding}
          handleLocation={handleLocation}
        />
      )}
      <Footer />
    </React.Fragment>
  );
}

export default App;
