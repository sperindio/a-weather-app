import React from "react";
import {
  Container,
  SearchBar,
  SearchButton,
  OuterSearchBar,
} from "./search.form.styles";

const SearchForm = ({ searchText, handleChange, handleSubmit }) => {
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <SearchBar
          type="text"
          value={searchText}
          placeholder="Where?"
          onChange={handleChange}
        />
        <SearchButton value="Search Now" type="submit" />
      </form>
    </Container>
  );
};

export default SearchForm;
