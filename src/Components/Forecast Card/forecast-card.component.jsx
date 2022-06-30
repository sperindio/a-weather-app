import React from "react";
import {
  OuterCardContainer,
  InnerCardStacking,
  MaxMinStyles,
} from "../Main Card/main-card.styles";
import { ForecastCardStyle } from "./forecast-card.styles";
import "../Main Card/main-card.styles-in-css.css";
import { ReactComponent as WeatherIcon } from "../../Assets/icons/01d.svg";

const ForecastCard = ({ temp, weather }) => {
  return (
      <ForecastCardStyle>
        <InnerCardStacking>
          <h3>Giorno</h3>
          <WeatherIcon className="icon" />
          <p id="temp">{Math.round(temp.day)}°C</p>
          <h5>{weather[0].main}</h5>
          <MaxMinStyles>
            <p>
              <span>{temp.max}°C</span>
              Max
            </p>
            <p>
              <span>{temp.min}°C</span>Min
            </p>
          </MaxMinStyles>
        </InnerCardStacking>
      </ForecastCardStyle>
  );
};

export default ForecastCard;
