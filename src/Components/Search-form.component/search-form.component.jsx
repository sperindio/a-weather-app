import React, { useState } from "react";
import {
  Container,
  SearchBar,
  SearchButton,
  OuterSearchBar,
} from "./search.form.styles";

const SearchForm = (props) => {
  const [searchText, setSearchText] = useState("");

  return (
    <Container>
      <OuterSearchBar>
        <form>
          <SearchBar
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          ></SearchBar>
        </form>
        <SearchButton>Search Now</SearchButton>
      </OuterSearchBar>
    </Container>
  );
};

export default SearchForm;
