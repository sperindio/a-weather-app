import React, { useState, useEffect } from "react";
import SearchForm from "./Components/Search-form.component/search-form.component";
import Header from "./Components/Header/header.component";
import Footer from "./Components/Footer/footer.component";
import { OFFLINE_DATA, DAILY_DATA } from "./Assets/offline-data";
import WeatherPage from "./Pages/WeatherPage";
import "./App.css";

function App() {
  const [searchText, setSearchText] = useState("");
  const [dailyData, setDailyData] = useState(DAILY_DATA);
  const [weatherData, setWeatherData] = useState(OFFLINE_DATA);

  const handleChange = (e) => {
    setSearchText(e.target.value);
    console.log(searchText);
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
        />
      )}
      <Footer />
    </React.Fragment>
  );
}

export default App;
