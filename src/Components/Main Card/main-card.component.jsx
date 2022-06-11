import React from "react";
//import { MainCardStyles } from "./main-card.styles";
import "./main-card.styles-in-css.css";
import { ReactComponent as WeatherIcon } from "../../Assets/icons/01d.svg";

const MainCard = ({ name, main, weather }) => {
  return (
    <div className="outer-container">
      <div className="card-container">
        <div className="inner-card-stacking">
          <h3>{name}</h3>
          <WeatherIcon className="icon" />
          <p id="temp">{main.temp}</p>
          <h5>{weather[0].main}</h5>
          <div className="max-min">
            <p>
              <span>{main.temp_max}</span>
              Max
            </p>
            <p>
              <span>{main.temp_min}</span>Min
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
