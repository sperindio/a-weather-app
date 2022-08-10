import styled from "styled-components";

export const OuterContainer = styled.div`
  display: block;
  height: 100vh;
  width: 100%;
`;

export const Container = styled.div`
  position: absolute;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  height: 200px;
  width: 100%;
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
  width: 20vw;
  margin: auto;
`;

export const SearchButton = styled.button`
  display: flex;
  flex-direction: column;
  background: rgba(0, 0, 0, 0);
  color: white;
  border: none;

  li {
    list-style-type: none;
    margin: 8px auto;
    padding: 0;
  }
`;

export const TopOuterContainer = styled(OuterContainer)`
  &:hover {
    display: block;
    height: 100vh;
    width: 100%;
  }
`;
