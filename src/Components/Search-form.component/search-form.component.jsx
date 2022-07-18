import React from "react";
import { Container, SearchBar, SearchButton, DynamicList } from "./search.form.styles";

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
        {geo[0] && (
          <React.Fragment>
            {console.log("This is the geo", geo)}
            <DynamicList>
            <ul>
                {geo.map((location, index) => (
                  <SearchButton type="Submit" value={location[index]}>
                    <li key={index}>
                      {location.name}, {location.state}, {location.country}
                    </li>
                  </SearchButton>
                ))}
            </ul>
            </DynamicList>
          </React.Fragment>
        )}
      </form>
    </Container>
  );
};

export default SearchForm;
