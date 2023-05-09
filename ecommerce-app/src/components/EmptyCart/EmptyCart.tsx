import React from "react";
import ContinueShoppingButton from "../ContinueShoppingButton/ContinueShoppingButton";
import { EmptyCartWrapper } from "./EmptyCart.styles";

function EmptyCart() {
  return (
    <EmptyCartWrapper data-testid = "EmptyCartElement" >
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSETcS3AlKxbLYN0ZThbgCs0xAfDxP_mfS0ug&usqp=CAU" />
      <h2>Hey, It feels so light!</h2>
      <p>There is nothing in your bag, let's add some items.</p>
      <ContinueShoppingButton />
    </EmptyCartWrapper>
  );
}

export default EmptyCart;
