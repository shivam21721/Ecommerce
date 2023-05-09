import React from "react";
import { useSelector } from "react-redux";
import {
  OrderHistoryWrapper,
  Title,
  OrderContainer,
  NoOrders,
} from "./OrderHistory.styles";
import {
  OrderHistoryType,
  StateType,
  UserInfoType,
} from "../../interfaces/interface";
import OrderHistoryCard from "../../components/OrderHistoryCard/OrderHistoryCard";

function OrderHistory() {
  const userInfo = useSelector(
    (state: StateType) => state.userReducer
  ) as UserInfoType;
  const ordersDetails = userInfo.order_history;
  return (
    <OrderHistoryWrapper>
      <Title>Your Orders</Title>
      {ordersDetails.length === 0 && (
        <NoOrders>YOU HAVE NOT PLACED ANY ORDER TILL NOW</NoOrders>
      )}
      <OrderContainer>
        {ordersDetails.map((order: OrderHistoryType) => (
          <OrderHistoryCard order={order} />
        ))}
      </OrderContainer>
    </OrderHistoryWrapper>
  );
}

export default OrderHistory;
