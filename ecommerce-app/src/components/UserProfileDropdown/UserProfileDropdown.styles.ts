import { Link } from "react-router-dom"; 
import styled from "styled-components";

export const LogoutProfileDropdown = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 120px;
  width: 100%;
  padding: 10px;
`;

export const LoginSignupButton = styled.button`
  padding: 10px 30px;
  margin-top: 10px;
  color: white;
  background-color: black;
  outline: none;
  border: 2px solid black;
  &:hover {
    border: 2px solid black;
    color: black;
    background-color: #eeeeee;
  }
`;

export const LoginProfileDropdown = styled.div`
  width: 200px;
  height: 200px;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const LoginProfileDropdownLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-decoration: none;
  color: #383838;
  cursor: pointer;
  display: flex;
  align-items: center;
  &:hover {
    color: black;
    font-weight: bold;
  }
`;

export const LinkName = styled.p`
  margin-left: 10px;
`;
