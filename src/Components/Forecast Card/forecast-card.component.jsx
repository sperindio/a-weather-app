import React from "react";
import { MaxMinStyles } from "../Main Card/main-card.styles";
import { ForecastInnerCardStacking } from "./forecast-card.styles";
import "../Main Card/main-card.styles-in-css.css";
import { ReactComponent as WeatherIcon } from "../../Assets/icons/01d.svg";

const ForecastCard = ({ temp, weather, dt }) => {
  //Converting the Unix timestamps to actual date (refer to this website: https://coderrocketfuel.com/article/convert-a-unix-timestamp-to-a-date-in-vanilla-javascript)
  const timeStamp = dt * 1000;
  const dateObject = new Date(timeStamp);
  const finalDay = [
    dateObject.toLocaleString("en-US", { weekday: "long" }),
    dateObject.toLocaleString("en-US", { day: "numeric" }),
  ];
  return (
    <ForecastInnerCardStacking>
      <h5>{finalDay[0] + "," + finalDay[1]}</h5>
      <WeatherIcon className="icon" />
      <p id="temp">{Math.round(temp.day)}°C</p>
      <h3>{weather[0].main}</h3>
      <MaxMinStyles>
        <p>
          <span>{Math.round(temp.max)}°C</span>
          Max
        </p>
        <p>
          <span>{Math.round(temp.min)}°C</span>Min
        </p>
      </MaxMinStyles>
    </ForecastInnerCardStacking>
  );
};

export default ForecastCard;
