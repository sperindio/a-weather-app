import React, { useState, useEffect } from "react";
import { SearchForm } from "./Components/Search-form.component/search-form.component";
import FirstHeader from "./Components/Header/header.component";
import Footer from "./Components/Footer/footer.component";
import { getDecodingData, getWeatherData } from "./Utils/fetch-main-data";
import SecondHeader from "./Components/Header/second-header.component";
import { OFFLINE_DATA, DAILY_DATA } from "./Assets/offline-data";
import WeatherPage from "./Pages/WeatherPage";
//Styles
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
    console.log(geoDecoding.results);
  }, [searchText]);

  const handleLocation = (local) => {
    setUniqueLocationData(local);
    console.log("Unique location", uniqueLocationData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    /*     console.log(
      "This is the final state" + uniqueLocationData.address.municipality
    );
    console.log(uniqueLocationData);
 */ alert("A name was submitted: " + uniqueLocationData.address.municipality);
    setSearchText("");
    let lat = uniqueLocationData.position.lat;
    let lon = uniqueLocationData.position.lon;
    getWeatherData(lat, lon, setWeatherData);
    setGeoDecoding([]);
  };

  return (
    <React.Fragment>
      {weatherData ? (
        <React.Fragment>
          <SecondHeader
            searchText={searchText}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            results={geoDecoding.results}
            handleLocation={handleLocation}
          />
          <WeatherPage weatherData={weatherData} dailyData={dailyData} />
        </React.Fragment>
      ) : (
        //{dailyData.map((daydata.weather.daily.lenght()) => <MainCard {...daydata} />)}
        <React.Fragment>
          <FirstHeader />
          <SearchForm
            searchText={searchText}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            results={geoDecoding.results}
            handleLocation={handleLocation}
          />
        </React.Fragment>
      )}
      <Footer />
    </React.Fragment>
  );
}

export default App;
