import React from "react";
import {
  HeaderStyles,
  HeaderSecondLeft,
  HeaderSecondRight,
  HeaderStylesWrapper,
} from "./header.styles";
import SearchFormOnTop from "../Search-form.component/search-form.component";

const SecondHeader = ({
  results,
  searchText,
  handleChange,
  handleSubmit,
  handleLocation,
}) => {
  return (
    <HeaderStylesWrapper>
      <HeaderSecondLeft />
      <HeaderSecondLeft>
        <h1>A Weather App</h1>
      </HeaderSecondLeft>
      <HeaderSecondRight>
        <SearchFormOnTop
          searchText={searchText}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          results={results}
          handleLocation={handleLocation}
        />
      </HeaderSecondRight>
    </HeaderStylesWrapper>
  );
};

export default SecondHeader;
