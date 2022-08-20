import React from "react";
import { HeaderStyles } from "./header.styles";
import SearchFormOnTop from "../Search-form.component/search-form.component";

const SecondHeader = ({
  results,
  searchText,
  handleChange,
  handleSubmit,
  handleLocation,
}) => {
  return (
    <HeaderStyles>
      <h1>A Weather App</h1>
      <SearchFormOnTop
        searchText={searchText}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        results={results}
        handleLocation={handleLocation}
      />
    </HeaderStyles>
  );
};

export default SecondHeader;
