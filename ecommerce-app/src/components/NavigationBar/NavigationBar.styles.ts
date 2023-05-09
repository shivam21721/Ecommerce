import { Link } from "react-router-dom"; 
import styled from "styled-components";

export const Navbar = styled.div`
  background-color: ghostwhite;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 80px;
  position: sticky;
  top: 0;
  z-index: 50;
  box-shadow: 0 3px 3px lightgray;
`;

export const Title = styled(Link)`
  font-family: "Caveat", cursive;
  color: black;
  text-decoration: none;
  font-size: 32px;
  font-weight: bolder;
`;

export const SearchBar = styled.div`
  background-color: #eeeeee;
  display: flex;
  align-items: center;
  padding-left: 10px;
  border-radius: 10px;
`;

export const NavbarItemWrapper = styled.div`
  display: flex;
  color: black;
  width: 300px;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

export const NavbarItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px;
  align-items: center;
  color: black;
  cursor: pointer;
  height: 100%;
`;

export const UserProfileDropdownWrapper = styled.div`
  position: fixed;
  z-index: 100;
  right: 17vw;
  background-color: ghostwhite;
  top: 75px;
  box-shadow: 0 0 8px #888888;
`;

export const SearchInput = styled.input`
  width: 300px;
  height: 40px;
  border-radius: 10px;
  border: none;
  outline: none;
  font-size: 15px;
  padding: 0 10px;
  background-color: #eeeeee;
`;

export const NavbarLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px;
  align-items: center;
  color: black;
  text-decoration: none;
`;

export const BagProductsCount = styled.span`
  background-color: black;
  color: white;
  font-size: 11px;
  padding: 3px;
  height: 15px;
  border-radius: 100px;
  min-width: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: -10px;
  margin-top: -5px;
`;

export const BagIcon = styled.div`
  display: flex;
`;
