import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  StateType,
  ProductType,
  UserInfoType,
} from "../../interfaces/interface";
import CartProduct from "../../components/CartProduct/CartProduct";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import EmptyCart from "../../components/EmptyCart/EmptyCart";
import { CartWrapper, CartProductContainer } from "./Cart.styles";
import NoUser from "../../components/NoUser/NoUser";
import Loading from "../../components/Loading/Loading";

function Cart() {
  const [loading, setLoading] = useState(false);
  const userInfo = useSelector(
    (state: StateType) => state.userReducer
  ) as UserInfoType;

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  if (loading) return <Loading />;
  if (!userInfo.userStatus) return <NoUser routeName={"cart"} />;
  if (userInfo.cart_items.length === 0) return <EmptyCart />;
  return (
    <CartWrapper>
      <CartProductContainer data-testid = "cartContainer">
        {userInfo.cart_items.map((product: ProductType) => (
          <CartProduct data={product} />
        ))}
      </CartProductContainer>
      <OrderSummary />
    </CartWrapper>
  );
}

export default Cart;
