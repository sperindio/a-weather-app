import React from "react";
import {
  FooterStyle,
  FooterSpan,
  LinkStyles,
  InnerFooter,
} from "./footer.styles";

const Footer = () => {
  return (
    <FooterStyle>
    
        <FooterSpan>App created by Alberto Sperindio</FooterSpan>
        <LinkStyles href="" target="_blank">
          GitHub
        </LinkStyles>
      
    </FooterStyle>
  );
};

export default Footer;
