import React from "react";
import {
  Container,
  SearchBar,
  SecondOuterContainer,
  TopSearchBar,
  SearchLine,
  SearchButton,
  DynamicList,
  OuterContainer,
  DynamicListSecond,
} from "./search.form.styles";

export const SearchForm = ({
  searchText,
  handleChange,
  handleSubmit,
  results,
  handleLocation,
}) => {
  return (
    <OuterContainer>
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
    </OuterContainer>
  );
};

export const SearchFormOnTop = ({
  searchText,
  handleChange,
  handleSubmit,
  results,
  handleLocation,
}) => {
  return (
    <SecondOuterContainer>
      <form onSubmit={handleSubmit}>
        <TopSearchBar
          type="text"
          value={searchText}
          placeholder="Where?"
          onChange={handleChange}
        />
        <SearchLine />
        {results && (
          <React.Fragment>
            {console.log("This is the geo ", results[0])}
            <DynamicListSecond>
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
            </DynamicListSecond>
          </React.Fragment>
        )}
      </form>
    </SecondOuterContainer>
  );
};

export default SearchFormOnTop;
