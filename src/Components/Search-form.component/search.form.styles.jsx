import styled from "styled-components";

export const Root = styled.body`
  background-color: rgba(250, 250, 250, 0.5);
`;

export const Container = styled.div`
  font-family: Monospace, Arial, Helvetica, sans-serif;
  text-align: center;
  top: 50%;
  margin: 50% auto;
  color: white;
`;

export const SearchBar = styled.input`
  font-family: Arial, Helvetica, sans-serif;
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  border-bottom: 1px solid white;
  height: 35px;
  box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);
  caret-color: white;

  ::placeholder {
    color: white;
    padding-left: 5px;
    letter-spacing: 3px;
  }

  :focus {
    outline: none;
  }

  p {
    font-size: 10px;
  }
`;

export const SearchButton = styled(SearchBar)`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 35px;
  height: auto;
  padding: 0.7em;
  margin-left: 10px;
  background: rgba(0, 0, 0, 0.3);
  color: white;
`;
