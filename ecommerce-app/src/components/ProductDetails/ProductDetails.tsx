import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import {
  StateType,
  UserInfoType,
  ProductType,
} from "../../interfaces/interface";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { db } from "../../firebase/firebase";
import { doc, updateDoc } from "firebase/firestore";
import { updateUserInfo } from "../../redux/actions/userAction";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { toast } from "react-toastify";
import {
  ProductDetailsWrapper,
  LeftSection,
  RightSection,
  ProductTitle,
  RatingSection,
  AverageRating,
  TotalReviews,
  HorizontalRow,
  ProductPriceSection,
  DiscountPercent,
  DiscountPrice,
  MaximumPrice,
  ButtonSection,
  AddToCartButton,
  AddToWishlistButton,
  WishlistedButton,
  ProductDescription,
  ProductDetailTitle,
  ProductImage,
} from "./ProductDetails.styles";
import Loading from "../Loading/Loading";

function ProductDetails() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const product = useLocation().state;
  const [loading, setLoading] = useState(false);

  const userInfo = useSelector(
    (state: StateType) => state.userReducer
  ) as UserInfoType;

  const isInCart = () => {
    return userInfo.cart_items.some((item: ProductType) => {
      return item.product_id === product.product_id;
    });
  };

  const isInWishlist = () => {
    return userInfo.wishlist_items.some((item: ProductType) => {
      return item.product_id === product.product_id;
    });
  };

  const updateProductQuantity = () => {
    return userInfo.cart_items.map((item: ProductType) => {
      if (item.product_id === product.product_id)
        return { ...item, quantity: item.quantity + 1 };
      return item;
    });
  };

  const addToWishlist = async () => {
    if (userInfo.userStatus === false) navigate("/login");
    else {
      const docRef = doc(db, "users", userInfo.email);
      dispatch(
        updateUserInfo({
          ...userInfo,
          wishlist_items: [...userInfo.wishlist_items, product],
        })
      );
      await updateDoc(docRef, {
        wishlist_items: [...userInfo.wishlist_items, product],
      });
      toast("Item added to wishlist");
    }
  };

  const addToCart = async () => {
    if (userInfo.userStatus === false) navigate("/login");
    else if (isInCart()) {
      const docRef = doc(db, "users", userInfo.email);
      dispatch(
        updateUserInfo({ ...userInfo, cart_items: updateProductQuantity() })
      );
      await updateDoc(docRef, { cart_items: updateProductQuantity() });
      toast("Item Added to cart");
    } else {
      const docRef = doc(db, "users", userInfo.email);
      dispatch(
        updateUserInfo({
          ...userInfo,
          cart_items: [...userInfo.cart_items, { ...product, quantity: 1 }],
        })
      );
      await updateDoc(docRef, {
        cart_items: [...userInfo.cart_items, { ...product, quantity: 1 }],
      });
      toast("Item Added to cart");
    }
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  if (loading) return <Loading />;

  return (
    <ProductDetailsWrapper>
      <LeftSection>
        <ProductImage src={product.image_url} className="product-img" />
      </LeftSection>
      <RightSection>
        <h1>{product.brand}</h1>
        <ProductTitle>{product.title}</ProductTitle>
        <RatingSection>
          <AverageRating>{product.rating} &#x2605;</AverageRating>
          <TotalReviews>{product.total_reviews} Ratings</TotalReviews>
        </RatingSection>
        <HorizontalRow />

        <ProductPriceSection>
          <DiscountPrice>Rs. {product.discount_price}</DiscountPrice>
          <MaximumPrice>
            <del>Rs. {product.max_price}</del>
          </MaximumPrice>
          <DiscountPercent>({product.discount_percent}% OFF)</DiscountPercent>
        </ProductPriceSection>

        <p>inclusive all taxes</p>

        <ButtonSection>
          <AddToCartButton onClick={addToCart}>
            Add To Cart <LocalMallIcon className="icon" />
          </AddToCartButton>
          {isInWishlist() ? (
            <WishlistedButton>
              WISHLISTED
              <FavoriteIcon className="icon" />
            </WishlistedButton>
          ) : (
            <AddToWishlistButton onClick={addToWishlist}>
              Add To Wishlist <FavoriteBorderIcon className="icon" />
            </AddToWishlistButton>
          )}
        </ButtonSection>

        <ProductDetailTitle>Product Details</ProductDetailTitle>
        <ProductDescription>{product.description}</ProductDescription>
      </RightSection>
    </ProductDetailsWrapper>
  );
}

export default ProductDetails;
