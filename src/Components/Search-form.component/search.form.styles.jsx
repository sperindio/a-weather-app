import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
`;

export const SearchBar = styled.input`
  background: rgba(0, 0, 0, 0.2);
  border: 0.5px solid rgba(0, 0, 0, 0.05);
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

export const DynamicList = styled.div`
background: rgba(0, 0, 0, 0.2);
border: 0.5px solid rgba(0, 0, 0, 0.05);
border-radius: 5px;
box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);
color: white;
`;

export const SearchButton = styled.button`
  display: flex;
  flex-direction: column;
  background: rgba(0, 0, 0, 0);
  color: white;
  border: none;

  li {
    list-style-type: none;
    margin: 2px auto;
    padding: 0;
  }

`;
