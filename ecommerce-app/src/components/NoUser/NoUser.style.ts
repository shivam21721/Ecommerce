import { Link } from "react-router-dom";
import styled from "styled-components";

export const NoUserWrapper = styled.div`
  height: calc(100vh - 80px);
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  margin: 20px;
`;

export const TextContent = styled.p`
  color: grey;
  font-size: 20px;
  margin: 20px;
`;

export const Image = styled.img`
  width: 200px;
  height: 200px;
  margin: 20px;
`;

export const LoginLink = styled(Link)`
  text-align: center;
  text-decoration: none;
  color: #383838;
  width: 200px;
  font-size: 20px;
  font-weight: bold;
  background-color: white;
  padding: 10px;
  border: 2px solid #383838;
  border-radius: 2px;
  &:hover {
    color: black;
    border: 2px solid black;
  }
`;
