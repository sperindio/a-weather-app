import React from "react";
import ForecastCard from "../Components/Forecast Card/forecast-card.component";
import MainCard from "../Components/Main Card/main-card.component";
import DetailCards from "../Components/Detail Card/detail-card.component";

//Styles
import { ForecastCardStyle } from "../Components/Forecast Card/forecast-card.styles";
import { DetailCardOuter } from "../Components/Detail Card/detail-card.styles";

const WeatherPage = ({ weatherData, dailyData }) => {
  return (
    <React.Fragment>
      <MainCard {...weatherData} />
      <DetailCardOuter>
        <DetailCards {...weatherData} />
      </DetailCardOuter>
      <h2 style={{ textAlign: "center" }}>Next days forecast</h2>
      <ForecastCardStyle>
        {dailyData[0].daily.slice(0, 5).map((dailies, index) => (
          <ForecastCard key={index} {...dailies} />
        ))}
      </ForecastCardStyle>
    </React.Fragment>
  );
};

export default WeatherPage;
