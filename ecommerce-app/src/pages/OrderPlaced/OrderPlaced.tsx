import React from "react";
import { useEffect } from "react";
import ContinueShoppingButton from "../../components/ContinueShoppingButton/ContinueShoppingButton";
import { OrderPlacedWrapper } from "./OrderPlaced.styles";

function OrderPlaced() {
  useEffect(() => {
    setTimeout(() => {
      document.getElementById("payment-success")?.classList.add("transition");
    }, 0);
  }, []);

  return (
    <OrderPlacedWrapper>
      <div id="payment-success">
        <img src="https://funtura.in/lko/wp-content/themes/funtura/assets/images/success.svg" alt="" />
        <h1>Congratulation!</h1>
        <h2>Order Placed</h2>
      </div>
      <ContinueShoppingButton />
    </OrderPlacedWrapper>
  );
}

export default OrderPlaced;
