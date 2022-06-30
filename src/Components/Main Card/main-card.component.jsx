import React from "react";
import {
  OuterCardContainer,
  CardContainer,
  InnerCardStacking,
  MaxMinStyles,
} from "./main-card.styles";
import "./main-card.styles-in-css.css";
import { ReactComponent as WeatherIcon } from "../../Assets/icons/01d.svg";

const MainCard = ({ name, main, weather }) => {
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
              <span>{Math.round(main.temp_max)}°C</span>
              Max
            </p>
            <p>
              <span>{Math.round(main.temp_min)}°C</span>Min
            </p>
          </MaxMinStyles>
        </InnerCardStacking>
      </CardContainer>
    </OuterCardContainer>
  );
};

export default MainCard;
