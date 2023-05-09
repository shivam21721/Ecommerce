import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateUserInfo } from "../../redux/actions/userAction";
import { db } from "../../firebase/firebase";
import { doc, updateDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import {
  StateType,
  ProductType,
  UserInfoType,
} from "../../interfaces/interface";
import {
  ProductBrandAndWishlistWrapper,
  ProductImage,
  ProductRating,
  ProductWrapper,
  ProductBrand,
  ProductTitle,
  ProductPrice,
  DiscountPercent,
  DiscountPrice,
  MaximumPrice,
} from "./ProductCard.styles";

interface PropType {
  data: ProductType;
}

function ProductCard(props: PropType) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userInfo = useSelector(
    (state: StateType) => state.userReducer
  ) as UserInfoType;

  const isInWishlist = () => {
    return userInfo.wishlist_items.some((item: ProductType) => {
      return item.product_id === props.data.product_id;
    });
  };

  const removeFromWishlist = () => {
    return userInfo.wishlist_items.filter((item: ProductType) => {
      return !(item.product_id === props.data.product_id);
    });
  };

  const handleWishlist = async () => {
    if (userInfo.userStatus === false) {
      navigate("/login");
    } else if (isInWishlist()) {
      const docRef = doc(db, "users", userInfo.email);
      dispatch(
        updateUserInfo({ ...userInfo, wishlist_items: removeFromWishlist() })
      );
      await updateDoc(docRef, { wishlist_items: removeFromWishlist() });
      toast("Item Removed from the wishlist!");
    } else {
      const docRef = doc(db, "users", userInfo.email);
      dispatch(
        updateUserInfo({
          ...userInfo,
          wishlist_items: [...userInfo.wishlist_items, props.data],
        })
      );
      await updateDoc(docRef, {
        wishlist_items: [...userInfo.wishlist_items, props.data],
      });
      toast("Item is added to the wishlist!");
    }
  };

  return (
    <ProductWrapper>
      <Link
        to={`/product/${props.data.product_id}`}
        state={props.data}
        data-testid="ImageElement"
      >
        <ProductImage src={props.data.image_url} />
      </Link>

      <ProductRating>
        {props.data.rating} &#x2605; | {props.data.total_reviews}
      </ProductRating>

      <ProductBrandAndWishlistWrapper>
        <ProductBrand>{props.data.brand}</ProductBrand>
        {isInWishlist() ? (
          <span title="Add to Wishlist" onClick={handleWishlist}>
            <FavoriteIcon className="wishlistIcon" />
          </span>
        ) : (
          <span title="Add to Wishlist" onClick={handleWishlist}>
            <FavoriteBorderIcon className="wishlistIcon" />
          </span>
        )}
      </ProductBrandAndWishlistWrapper>

      <ProductTitle>{props.data.title}</ProductTitle>
      <ProductPrice>
        <DiscountPrice>Rs. {props.data.discount_price}</DiscountPrice>
        <MaximumPrice>
          <del>Rs. {props.data.max_price}</del>
        </MaximumPrice>
        <DiscountPercent>({props.data.discount_percent}% OFF)</DiscountPercent>
      </ProductPrice>
    </ProductWrapper>
  );
}

export default ProductCard;
