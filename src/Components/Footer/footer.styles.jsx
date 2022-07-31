import styled from "styled-components";

export const FooterStyle = styled.div`
  position: relative;
  bottom: 0px;
  width: 100%;
  height: 100px;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.4) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  color: white;
`;

export const FooterSpan = styled.span`
  margin-right: 20px;
`;

export const LinkStyles = styled.a`
  text-decoration: none;
  color: white;
  font-weight: bold;
`;
