import styled from "styled-components";

export const OrderHistoryWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  padding: 10px 120px 60px 120px;
  overflow: scroll;
`;

export const Title = styled.h1`
  font-size: 40px;
  background-color: #383838;
  color: white;
  text-align: center;
  padding: 10px;
`;

export const OrderContainer = styled.div`
  overflow: scroll;
  height: 450px;
`;

export const NoOrders = styled.div`
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
`;
