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
export const DynamicListSecond = styled.div`
  position: absolute;
  top: 5vw;
  background: rgba(0, 0, 0, 0.2);
  border: 0.5px solid rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);
  color: white;
  width: 20vw;
  margin: 10px auto;
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

export const SecondOuterContainer = styled.div`
  position: relative;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 300px;
  height: 100px;
`;

export const SearchLine = styled.div`
  position: absolute;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 60px;
  height: 60px;
  background: crimson;
  border-radius: 50%;
  transition: all 1s;
  z-index: 4;
  box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.4);

  &:hover {
    cursor: pointer;
  }

  &::before {
    content: "";
    position: absolute;
    margin: auto;
    top: 22px;
    right: 0;
    bottom: 0;
    left: 22px;
    width: 12px;
    height: 2px;
    background: white;
    transform: rotate(45deg);
    transition: all 0.5s;
  }

  &::after {
    content: "";
    position: absolute;
    margin: auto;
    top: -5px;
    right: 0;
    bottom: 0;
    left: -5px;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 2px solid white;
    transition: all 0.5s;
  }
`;
export const TopSearchBar = styled.input`
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 50px;
    outline: none;
    border: none;
    background: crimson;
    color: white;
    text-shadow: 0 0 10px crimson;
    padding: 0 80px 0 20px;
    border-radius: 30px;
    box-shadow: 0 0 25px 0 crimson,
                0 20px 25px 0 rgba(0, 0, 0, 0.2);
    transition: all 1s;
    opacity: 0;
    z-index: 5;
    font-weight: bolder;
    letter-spacing: 0.1em;
    &:hover {
      cursor: pointer;
    }
    &:focus {
      width: 300px;
      opacity: 1;
      cursor: text;
    }
    &:focus ~ .search {
      right: -250px;
      background: #151515;
      z-index: 6;
      &::before {
        top: 0;
        left: 0;
        width: 25px;
      }
      &::after {
        top: 0;
        left: 0;
        width: 25px;
        height: 2px;
        border: none;
        background: white;
        border-radius: 0%;
        transform: rotate(-45deg);
      }
    }
    &::placeholder {
      color: white;
      opacity: 0.5;
      font-weight: bolder;
    }
  }
    `;
