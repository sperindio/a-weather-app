import styled from "styled-components";

export const DetailCardOuter = styled.div`
  margin: 30px auto;
  width: 80%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  h3 {
    font-size: 18px;
    line-height: 50px;
  }

  h5 {
    font-size: 12px;
  }
`;

export const DetailCardInner = styled.div`
  margin: auto 5px;
  padding: auto 5px;
  text-align: center;
  color: white;
  border: 2px solid white;
  border-radius: 35px;
  box-shadow: 0px 0px 5px white;

  * {
    margin: 5px 20px;
  }
`;
