import { Link } from "react-router-dom";
import styled from "styled-components";

export const LoginWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LeftSection = styled.div`
  width: 500px;
  height: 500px;
  background-color: black;
  color: white;
`;

export const RightSection = styled.div`
  background-color: #eeeeee;
  display: flex;
  width: 500px;
  height: 500px;
  flex-direction: column;
  padding: 20px;
  align-items: center;
  h1 {
    margin-top: 20px;
    margin-bottom: 7px;
  }
  h4 {
    margin-bottom: 30px;
    color: grey;
    font-weight: 300;
  }
`;

export const BrandName = styled.h1`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Caveat", cursive;
  border-bottom: 2px solid grey;
`;

export const BrandQuote = styled.h1`
  margin-top: 100px;
  text-align: center;
  font-size: 40px;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const LoginFormInput = styled.input`
  outline: none;
  border: none;
  width: 250px;
  height: 30px;
  padding-left: 10px;
  margin-top: 5px;
  margin-bottom: 15px;
  border-bottom: 1px solid gray;
`;

export const LoginButton = styled.button`
  width: 250px;
  margin: auto;
  margin-top: 20px;
  border-radius: 10px;
  border: none;
  padding: 10px;
  margin-bottom: 10px;
  background-color: black;
  font-weight: 700;
  color: #eeeeee;
`;

export const BottomContent = styled.span`
  color: grey;
`;

export const SignupLink = styled(Link)`
  color: black;
  font-weight: 700;
  text-decoration: none;
  margin-left: 10px; 
`;

export const ErrorText = styled.p`
  background-color: black;
  color: white;
  padding: 5px 20px;
  margin-bottom: 10px;
  border-radius: 8px;
`;
