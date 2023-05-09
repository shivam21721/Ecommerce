import { NavLink } from "react-router-dom"; 
import styled from "styled-components";

export const NavbarWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  margin: auto;
  padding: 30px 80px 30px 80px;
  .active {
    color: black;
    text-decoration: underline;
  }
`;

export const NavbarItem = styled(NavLink)`
  text-decoration: none;
  color: #7f8487;
  &:hover {
    color: black;
    text-decoration: underline;
  }
`;
