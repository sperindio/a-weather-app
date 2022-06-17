import React from "react";
import {
  OuterCardContainer,
  CardContainer,
  InnerCardStacking,
  MaxMinStyles,
} from "../Main Card/main-card.styles";
import "../Main Card/main-card.styles-in-css.css";
import { ReactComponent as WeatherIcon } from "../../Assets/icons/01d.svg";

const ForecastCard = ({ daily }) => {
  return (
    <OuterCardContainer>
      <CardContainer>
        <InnerCardStacking>
          <h3>Giorno</h3>
          <WeatherIcon className="icon" />
          <p id="temp">{Math.round(daily[0].temp.day)}°C</p>
          <h5>Buono</h5>
          <MaxMinStyles>
            <p>
              <span>28°C</span>
              Max
            </p>
            <p>
              <span>22°C</span>Min
            </p>
          </MaxMinStyles>
        </InnerCardStacking>
      </CardContainer>
    </OuterCardContainer>
  );
};

export default ForecastCard;
