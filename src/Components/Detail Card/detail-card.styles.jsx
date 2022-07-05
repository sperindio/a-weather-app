import styled from "styled-components";

export const DetailCardOuter = styled.div`
  margin: 30px auto;
  width: 80%;
  height: auto;
  display: flex;
  flex-direction: row;
  color: white;
  justify-content: space-around;

  h3 {
    font-size: 20px;
    line-height: 30px;
  }

  h5 {
    font-size: 16px;
  }
`;

export const DetailCardInner = styled.div`
  margin: auto 5px;
  padding: auto 5px;
  width: 10vw;
  text-align: center;
  border: 2px solid white;
  border-radius: 35px;
  box-shadow: 0px 0px 5px white;

  * {
    margin: 5px 50px;
  }
`;
