import React, { useState, useEffect } from "react";
import SearchForm from "./Components/Search-form.component/search-form.component";
import "./App.css";

function App() {
  const [searchText, setSearchText] = useState("");

  const handleChange = (e) => {
    setSearchText(e.target.value);
    console.log(searchText);
  };

  const handleSubmit = (event) => {
    console.log("This is the final state" + searchText);
    alert("A name was submitted: " + searchText);
    setSearchText("");
    event.preventDefault();
  };

  return (
    <SearchForm
      searchText={searchText}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
}

export default App;
