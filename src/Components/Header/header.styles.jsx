import styled from "styled-components";

export const HeaderStyles = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 18px;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.4) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  color: white;
`;

export const HeaderSecondLeft = styled.div`
  display: flex;
  justify-content: center;
  font-size: 18px;
  color: white;
  width: 33%;
`;

export const HeaderSecondRight = styled.div`
  display: inline-block;
  justify-content: flex-end;
  font-size: 16px;
  width: 33%;
`;

export const HeaderStylesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: auto;
  align-items: center;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.4) 0%,
    rgba(0, 0, 0, 0) 100%
  );
`;
