import React from "react";
import { ProductType } from "../../interfaces/interface";
import { ItemImage, ItemWrapper } from "./OrderHistoryCardItem.styles";

interface propType {
  item: ProductType;
}

function OrderHistoryCardItem(props: propType) {
  return (
    <ItemWrapper>
      <ItemImage src={props.item.image_url} />
      <h2>{props.item.brand}</h2>
      <h4>{props.item.title}</h4>
      <h4>Quantity : {props.item.quantity}</h4>
    </ItemWrapper>
  );
}

export default OrderHistoryCardItem;
