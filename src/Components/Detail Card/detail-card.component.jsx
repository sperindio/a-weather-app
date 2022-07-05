import React from "react";
import { DetailCardInner } from "./detail-card.styles";
import { ReactComponent as WindIcon } from "../../Assets/icons/wind.svg";
import { ReactComponent as FeelsIcon } from "../../Assets/icons/feels-like.svg";
import { ReactComponent as HumidityIcon } from "../../Assets/icons/humidity.svg";

const DetailCards = ({ wind, main }) => {
  return (
    <React.Fragment>
      <DetailCardInner>
        <h5>Wind</h5>
        <WindIcon />
        <h3>{wind.speed}Km/h</h3>
      </DetailCardInner>
      <DetailCardInner>
        <h5>Perception</h5>
        <FeelsIcon />
        <h3>{Math.round(main.feels_like)}°C</h3>
      </DetailCardInner>
      <DetailCardInner>
        <h5>Humidity</h5>
        <HumidityIcon />
        <h3>{main.humidity}%</h3>
      </DetailCardInner>
    </React.Fragment>
  );
};

export default DetailCards;
