import React from "react";
import ContinueShoppingButton from "../ContinueShoppingButton/ContinueShoppingButton";
import {
  EmptyWishlistWrapper,
  Content,
  EmptyWishListImage,
} from "./EmptyWishlist.styles";

function EmptyWishlist() {
  return (
    <EmptyWishlistWrapper data-testid = "EmptyWishlistElement">
      <h2>YOUR WISHLIST IS EMPTY</h2>
      <Content>
        Add items that you like to your wishlist. Review them anytime and easily
        move them to the bag.
      </Content>
      <EmptyWishListImage src="https://static.vecteezy.com/system/resources/thumbnails/016/133/639/small_2x/wishlist-icon-in-comic-style-like-document-cartoon-illustration-on-white-isolated-background-favorite-list-splash-effect-business-concept-vector.jpg" />
      <ContinueShoppingButton />
    </EmptyWishlistWrapper>
  );
}

export default EmptyWishlist;
