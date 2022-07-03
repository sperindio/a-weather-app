import React from "react";
import ForecastCard from "../Components/Forecast Card/forecast-card.component";
import MainCard from "../Components/Main Card/main-card.component";
import DetailCard from "../Components/Detail Card/detail-card.component";

//Styles
import { ForecastCardStyle } from "../Components/Forecast Card/forecast-card.styles";

const WeatherPage = ({ weatherData, dailyData }) => {
  return (
    <React.Fragment>
      <MainCard {...weatherData} />
      <ForecastCardStyle>
        <h2 className="forecast-h">Next days forecast</h2>
        {dailyData[0].daily.slice(0, 5).map((dailies, index) => (
          <ForecastCard key={index} {...dailies} />
        ))}
      </ForecastCardStyle>
      <DetailCard />
    </React.Fragment>
  );
};

export default WeatherPage;
