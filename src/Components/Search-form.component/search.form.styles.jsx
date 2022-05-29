import styled from "styled-components";

export const Root = styled.body`
  background-image: url(/Assets/images/bgmain.jpg);
`;

export const Container = styled.div`
  font-family: Monospace, Arial, Helvetica, sans-serif;
  position: fixed;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
`;

export const SearchBar = styled.input`
  font-family: Arial, Helvetica, sans-serif;
  background: rgba(0, 0, 0, 0.2);

  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  border-bottom: 1px solid white;
  height: 35px;
  width: 20vw;
  box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);
  caret-color: white;
  color: white;

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
  width: auto;
  padding: 0.7em;
  margin-left: 10px;
  background: rgba(0, 0, 0, 0.3);
  color: white;
`;
