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

        {geo.lenght > 0 && (
          <React.Fragment>
            {console.log("This is the geo" + geo)}
            <ul>
              <SearchButton>
                {geo[0].slice(0, 5).map((location, index) => (
                  <li key={index}>
                    {location.name}, {location.state}, {location.country}
                  </li>
                ))}
              </SearchButton>
            </ul>
          </React.Fragment>
        )}
      </form>
    </Container>
  );
};

export default SearchForm;
