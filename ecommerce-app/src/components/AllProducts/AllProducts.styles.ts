import styled from "styled-components";

export const ProductWrapper = styled.div`
  padding: 0px 100px;
  display: flex;
  flex-wrap: wrap;
`;

export const NoFilterResult = styled.div`
  color: black;
  width: 100vw;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NoFilterResultHeading = styled.h1`
  margin: 50px 0 30px 0;
`;

export const NoFilterResultContent = styled.p`
  font-size: 20px;
  color: grey;
`;
