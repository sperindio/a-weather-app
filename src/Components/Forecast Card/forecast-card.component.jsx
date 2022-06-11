import React from "react";
import {
  OuterCardContainer,
  CardContainer,
  InnerCardStacking,
  MaxMinStyles,
} from "../Main Card/main-card.styles";
import "./main-card.styles-in-css.css";
import { ReactComponent as WeatherIcon } from "../../Assets/icons/01d.svg";

const ForecastCard = ({ daily }) => {
  return (
    <OuterCardContainer>
      <CardContainer>
        <InnerCardStacking>
          <h3>{name}</h3>
          <WeatherIcon className="icon" />
          <p id="temp">{Math.round(main.temp)}°C</p>
          <h5>{weather[0].main}</h5>
          <MaxMinStyles>
            <p>
              <span>{main.temp_max}</span>
              Max
            </p>
            <p>
              <span>{main.temp_min}</span>Min
            </p>
          </MaxMinStyles>
        </InnerCardStacking>
      </CardContainer>
    </OuterCardContainer>
  );
};

export default ForecastCard;
