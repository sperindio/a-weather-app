import React from "react";
import styled from "styled-components";

export const Root = styled.body`
  background-color: rgba(250, 250, 250, 0.5);
`;

export const Container = styled.div`
  width: 100%;
  margin: 50px auto;
  color: white;
`;

export const OuterSearchBar = styled.div`
  margin: auto;
  width: 50%;
`;

export const SearchBar = styled.input`
  background: rgba(0, 0, 0, 0.1);
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 1px solid white;
  border-radius: 5x;
  height: 30px;
  box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);
  caret-color: white;
  color: white;

  :focus {
    outline: none;
  }

  p {
    font-size: 10px;
  }
`;

export const SearchButton = styled.button`
  border: 1px solid white;
  border-radius: 5px;
  padding: 0.5em;
  margin-left: 10px;
  background: rgba(0, 0, 0, 0.3);
  color: white;
`;
