import styled from "styled-components";

export const OrderSummaryWrapper = styled.div`
  height: 330px;
  right: 20px;
  width: 35%;
  background-color: ghostwhite;
  box-shadow: 0 3px 3px lightgray;
  padding: 10px;
`;

export const Title = styled.h1`
  text-align: center;
  padding-bottom: 10px;
`;

export const HorizontalRow = styled.hr`
  width: 95%;
  margin: auto;
  margin-bottom: 10px;
  height: 3px;
  background-color: grey;
`;

export const OrderSummaryItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  padding: 10px;
`;

export const PlaceOrderSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const PlaceOrderButton = styled.button`
  padding: 10px 60px;
  margin-top: 10px;
  font-size: 20px;
  font-weight: bold;
  border-radius: 8px;
  outline: none;
  border: 2px solid #383838;
  background-color: #383838;
  transition: all 0.2s ease-in-out;
  color: ghostwhite;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 8px #383838;
  }
`;
