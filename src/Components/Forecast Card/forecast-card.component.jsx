import React from "react";
import {
  InnerCardStacking,
  MaxMinStyles,
} from "../Main Card/main-card.styles";
import { ForecastCardStyle, ForecastInnerCardStacking } from "./forecast-card.styles";
import "../Main Card/main-card.styles-in-css.css";
import { ReactComponent as WeatherIcon } from "../../Assets/icons/01d.svg";

const ForecastCard = ({ temp, weather, dt }) => {
  //Converting the Unix timestamps to actual date (refer to this website: https://coderrocketfuel.com/article/convert-a-unix-timestamp-to-a-date-in-vanilla-javascript)
  const timeStamp = dt*1000;
  const dateObject = new Date(timeStamp);
  const finalDay = [dateObject.toLocaleString("en-US", {weekday: "long"}), dateObject.toLocaleString("en-US", {day: "numeric"})]
  return (
        <ForecastInnerCardStacking>
          <h3>{finalDay[0] + "," + finalDay[1]}</h3>
          <WeatherIcon className="icon" />
<<<<<<< HEAD
          <p id="temp">{Math.round(daily[0].temp.day)}°C</p>
          <h5>{daily[0].weather[0].main}</h5>
=======
          <p id="temp">{Math.round(temp.day)}°C</p>
          <h5>{weather[0].main}</h5>
>>>>>>> 370fcb0d773109cd02d16bdf557425affdf7451b
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
