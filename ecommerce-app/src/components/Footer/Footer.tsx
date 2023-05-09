import React from "react";
import { useLocation } from "react-router-dom";
import {
  FooterWrapper,
  FooterLeftSection,
  FooterRightSecton,
  FooterMiddleSection,
  FooterBrandName,
  FooterBrandTitle,
  MiddleSectionItems,
  ContactFormInput,
  ContactFormTextarea,
  FooterButton,
} from "./Footer.styles";

function Footer() {
  const { pathname } = useLocation();
  if (pathname === "/login" || pathname === "/signup") return null;
  return (
    <FooterWrapper data-testid="footer-wrapper">
      <FooterLeftSection>
        <FooterBrandName>The Gentleman's Attire</FooterBrandName>
        <FooterBrandTitle>
          REAL DESIGNS BY REAL ARTISTS
          <br /> FOR REAL PEOPLE
        </FooterBrandTitle>
      </FooterLeftSection>
      <FooterMiddleSection>
        <MiddleSectionItems>
          <h2>Products</h2>
          <div>
            <p>All Products</p>
            <p>Blazers</p>
            <p>Shirts</p>
            <p>Watches</p>
            <p>Shoes</p>
          </div>
        </MiddleSectionItems>
        <MiddleSectionItems>
          <h2>Buying</h2>
          <div>
            <p>Shop</p>
            <p>Terms of Use</p>
            <p>Privacy</p>
            <p>How it works</p>
            <p>Customer Service</p>
          </div>
        </MiddleSectionItems>
        <MiddleSectionItems>
          <h2>Social</h2>
          <div>
            <p>Instagram</p>
            <p>Facebook</p>
            <p>Twitter</p>
          </div>
        </MiddleSectionItems>
      </FooterMiddleSection>
      <FooterRightSecton>
        <h1>Contact Us</h1>
        <ContactFormInput type="email" placeholder="Email"></ContactFormInput>
        <ContactFormTextarea placeholder="Write Comment"></ContactFormTextarea>
        <FooterButton>Send</FooterButton>
      </FooterRightSecton>
    </FooterWrapper>
  );
}

export default Footer;
