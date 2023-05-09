import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import EmptyWishlist from "../../components/EmptyWishlist/EmptyWishlist";
import WishlistProductCard from "../../components/WishlistProductCard/WishlistProductCard";
import { WishlistWrapper, WishlistTitle } from "./Wishlist.styles";
import NoUser from "../../components/NoUser/NoUser";
import Loading from "../../components/Loading/Loading";
import {
  StateType,
  ProductType,
  UserInfoType,
} from "../../interfaces/interface";

function Wishlist() {
  const userInfo = useSelector(
    (state: StateType) => state.userReducer
  ) as UserInfoType;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  if (loading) return <Loading />;
  if (!userInfo.userStatus) return <NoUser routeName={"wishlist"} />;
  if (userInfo.wishlist_items.length === 0) return <EmptyWishlist />;
  return (
    <>
      <WishlistTitle>YOUR WISHLIST</WishlistTitle>
      <WishlistWrapper data-testid = "wishlistContainer">
        {userInfo.wishlist_items.map((product: ProductType) => (
          <WishlistProductCard data={product} />
        ))}
      </WishlistWrapper>
    </>
  );
}

export default Wishlist;
