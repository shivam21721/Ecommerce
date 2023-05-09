import React from "react";
import { OrderHistoryType, ProductType } from "../../interfaces/interface";
import OrderHistoryCardItem from "../OrderHistoryCardItem/OrderHistoryCardItem";
import {
  OrderHistoryCardWrapper,
  OrderDetail,
  OrderItemContainer,
} from "./OrderHistoryCart.styles";

interface propType {
  order: OrderHistoryType;
}

function OrderHistoryCard(props: propType) {
  const orderList = props.order.orders_list;
  if (props.order.order_id === "0") return null;

  return (
    <OrderHistoryCardWrapper>
      <OrderDetail>
        <h2>Order Id : {props.order.order_id}</h2>
        <h2>Total Amount : Rs.{props.order.total_amount}</h2>
      </OrderDetail>
      <OrderItemContainer>
        {orderList.map((item: ProductType) => (
          <OrderHistoryCardItem item={item} />
        ))}
      </OrderItemContainer>
    </OrderHistoryCardWrapper>
  );
}

export default OrderHistoryCard;
