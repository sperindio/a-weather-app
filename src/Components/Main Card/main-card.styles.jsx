import styled from "styled-components";

export const OuterCardContainer = styled.div`
  margin: auto;
`;

export const CardContainer = styled.div`
  margin: 30px auto;
  width: 15%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 2px solid white;
  border-radius: 35px;
  box-shadow: 0px 0px 10px white;
`;

export const InnerCardStacking = styled.div`
  margin: auto;
  text-align: center;
  color: white;

  * {
    margin: 15px auto;
  }
`;

export const MaxMinStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  p {
    font-size: 16px;
    margin: 10px 10px;

    span {
      margin-right: 5px;
    }
  }
`;
