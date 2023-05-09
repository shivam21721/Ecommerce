import styled from "styled-components";

export const SearchWrapper = styled.div`
  padding: 30px 0px;
`;

export const SearchTitle = styled.h1`
  text-align: center;
  color: grey;
  font-weight: 500px;
`;

export const SearchValue = styled.span`
  color: black;
  margin-left: 10px;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 100px;
`;

export const NoSearchResult = styled.div`
  text-align: center;
  margin-top: 200px;
  color: grey;
  font-weight: 500px;
  width: 100vw;
  height: calc(100vh - 80px);
  font-size: 40px;
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
