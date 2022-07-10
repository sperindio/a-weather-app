import React from "react";
import { Container, SearchBar, SearchButton } from "./search.form.styles";

const SearchForm = ({ searchText, handleChange, handleSubmit, geo }) => {
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <SearchBar
          type="text"
          value={searchText}
          placeholder="Where?"
          onChange={handleChange}
        />
        {geo ? (
          <React.Fragment>
            {console.log(geo)}
            <ul>
              {geo.map((location, index) => (
                <SearchButton type="submit" key={index}>
                  {location.name}, {location.state}, {location.country}
                </SearchButton>
              ))}
            </ul>
          </React.Fragment>
        ) : null}
      </form>
    </Container>
  );
};

export default SearchForm;
