import React, { useState, useEffect } from "react";
import SearchForm from "./Components/Search-form.component/search-form.component";
import Header from "./Components/Header/header.component";
import Footer from "./Components/Footer/footer.component";
import getDecodingData from "./Utils/fetch-main-data";
import { OFFLINE_DATA, DAILY_DATA, GEODECODING } from "./Assets/offline-data";
import WeatherPage from "./Pages/WeatherPage";
import "./App.css";

function App() {
  const [searchText, setSearchText] = useState("");
  const [dailyData, setDailyData] = useState(DAILY_DATA);
  const [weatherData, setWeatherData] = useState("");
  const [geoDecoding, setGeoDecoding] = useState([]);

  const handleChange = (e) => {
    setSearchText(e.target.value);
    console.log(searchText);
    if (searchText.length > 1) {
      getDecodingData(searchText, setGeoDecoding);
    }
    console.log(geoDecoding);
  };

  const handleSubmit = (event) => {
    console.log("This is the final state" + searchText);
    alert("A name was submitted: " + searchText);
    setSearchText("");
    event.preventDefault();
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
        />
      )}
      <Footer />
    </React.Fragment>
  );
}

export default App;
