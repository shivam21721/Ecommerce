import styled from "styled-components";

export const FooterWrapper = styled.div`
  background-color: black;
  height: 300px;
  display: flex;
  justify-content: space-between;
  margin-top: 30px; 
`;

export const FooterLeftSection = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 100%;
  padding: 50px;
`;

export const FooterMiddleSection = styled.div`
  width: 40%;
  color: white;
  display: flex;
  justify-content: space-evenly;
  padding: 50px;
`;

export const FooterRightSecton = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  padding: 50px 50px 0 50px;
`;

export const FooterBrandName = styled.h1`
  font-family: "Caveat", cursive;
  color: white;
`;

export const FooterBrandTitle = styled.p`
  color: white;
`;

export const MiddleSectionItems = styled.div`
  h2 {
    margin-bottom: 20px;
  }
  p {
    margin-bottom: 10px;
  }
`;

export const ContactFormInput = styled.input`
  margin: 10px;
  border: none;
  outline: none;
  width: 250px;
  padding: 10px;
`;

export const ContactFormTextarea = styled.input`
  margin: 10px;
  border: none;
  outline: none;
  width: 250px;
  padding: 10px;
`;

export const FooterButton = styled.div`
  padding: 10px 0px;
  width: 250px;
  background-color: white;
  border: none;
  outline: none;
  font-size: 20px;
  font-weight: 700;
  color: black;
  text-align: center;
  cursor: pointer;
`;
