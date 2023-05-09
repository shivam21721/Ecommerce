import React from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingButton } from "./ContinueShoppingButton.styles";

function ContinueShoppingButton() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <ShoppingButton onClick={handleClick} data-testid="ContinueShoppingBtn">
      Continue Shopping
    </ShoppingButton>
  );
}

export default ContinueShoppingButton;
