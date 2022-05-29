import React, { useState, useEffect } from "react";
import SearchForm from "./Components/Search-form.component/search-form.component";
import { Root } from "./Components/Search-form.component/search.form.styles";
import Header from "./Components/Header/header.component";
import Footer from "./Components/Footer/footer.component";
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
    <React.Fragment>
      <Header />
      <SearchForm
        searchText={searchText}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <Footer />
    </React.Fragment>
  );
}

export default App;
