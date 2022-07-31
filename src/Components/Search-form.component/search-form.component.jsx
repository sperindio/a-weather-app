import React from "react";
import {
  Container,
  SearchBar,
  SearchButton,
  DynamicList,
} from "./search.form.styles";

const SearchForm = ({
  searchText,
  handleChange,
  handleSubmit,
  results,
  handleLocation,
}) => {
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <SearchBar
          type="text"
          value={searchText}
          placeholder="Where?"
          onChange={handleChange}
        />
        {results && (
          <React.Fragment>
            {console.log("This is the geo ", results[0])}
            <DynamicList>
              <ul>
                {results.map((location) => (
                  <SearchButton
                    key={location.id}
                    type="Submit"
                    onClick={() => handleLocation(location)}
                  >
                    <li>
                      {location.address.municipality},{" "}
                      {location.address.countrySubdivision},{" "}
                      {location.address.country}
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
