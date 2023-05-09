import React from "react";
import { Link } from "react-router-dom";
import ClearIcon from "@mui/icons-material/Clear";
import {
  ProductType,
  StateType,
  UserInfoType,
} from "../../interfaces/interface";
import { useDispatch, useSelector } from "react-redux";
import { updateUserInfo } from "../../redux/actions/userAction";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { toast } from "react-toastify";
import {
  ProductWrapper,
  ProductImage,
  ProductBrand,
  ProductTitle,
  ProductRating,
  PriceSection,
  DiscountPercent,
  DiscountPrice,
  MaximumPrice,
  MoveToBagButton,
} from "./WishlistProductCard.styles";

interface PropType {
  data: ProductType;
}

function WishlistProductCard(props: PropType) {
  const dispatch = useDispatch();
  const userInfo = useSelector(
    (state: StateType) => state.userReducer
  ) as UserInfoType;

  const removeFromWishlist = () => {
    return userInfo.wishlist_items.filter((item: ProductType) => {
      return !(item.product_id === props.data.product_id);
    });
  };

  const isInCart = () => {
    return userInfo.cart_items.some((item: ProductType) => {
      return item.product_id === props.data.product_id;
    });
  };

  const updateProductQuantity = () => {
    return userInfo.cart_items.map((item: ProductType) => {
      if (item.product_id === props.data.product_id)
        return { ...item, quantity: item.quantity + 1 };
      return item;
    });
  };

  const addToCart = () => {
    if (isInCart()) {
      return updateProductQuantity();
    } else {
      return [...userInfo.cart_items, { ...props.data, quantity: 1 }];
    }
  };

  const handleMoveToBag = async () => {
    const docRef = doc(db, "users", userInfo.email);
    dispatch(
      updateUserInfo({
        ...userInfo,
        wishlist_items: removeFromWishlist(),
        cart_items: addToCart(),
      })
    );
    await updateDoc(docRef, {
      cart_items: addToCart(),
      wishlist_items: removeFromWishlist(),
    });

    toast("Item Moved to the cart !");
  };

  const handleRemoveFromWishlist = async () => {
    const docRef = doc(db, "users", userInfo.email);
    dispatch(
      updateUserInfo({
        ...userInfo,
        wishlist_items: removeFromWishlist(),
      })
    );
    await updateDoc(docRef, {
      wishlist_items: removeFromWishlist(),
    });
    toast("Item Removed from the wishlist !");
  };

  return (
    <ProductWrapper>
      <div>
        <ClearIcon onClick={handleRemoveFromWishlist} className="remove-icon" />
        <Link to={`/product/${props.data.product_id}`} state={props.data}>
          <ProductImage src={props.data.image_url} />
        </Link>
      </div>
      <ProductRating>
        {props.data.rating} &#x2605; | {props.data.total_reviews}
      </ProductRating>
      <ProductBrand>{props.data.brand}</ProductBrand>
      <ProductTitle>{props.data.title}</ProductTitle>

      <PriceSection>
        <DiscountPrice>Rs. {props.data.discount_price}</DiscountPrice>
        <MaximumPrice>
          <del>Rs. {props.data.max_price}</del>
        </MaximumPrice>
        <DiscountPercent>({props.data.discount_percent}% OFF)</DiscountPercent>
      </PriceSection>

      <MoveToBagButton onClick={handleMoveToBag}>Move To Bag</MoveToBagButton>
    </ProductWrapper>
  );
}

export default WishlistProductCard;
