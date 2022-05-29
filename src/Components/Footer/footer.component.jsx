import React from "react";
import "./footer.styles.css";
import { FooterStyle, FooterSpan, LinkStyles } from "./footer.styles";

const Footer = () => {
  return (
    <FooterStyle>
      <div>
        <FooterSpan>App created by Alberto Sperindio</FooterSpan>
      </div>
      <div>
        <LinkStyles href="" target="_blank">
          GitHub
        </LinkStyles>
      </div>
    </FooterStyle>
  );
};

export default Footer;
