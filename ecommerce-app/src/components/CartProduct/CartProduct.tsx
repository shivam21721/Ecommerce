import React from "react";
import ClearIcon from "@mui/icons-material/Clear";
import KeyboardReturnRoundedIcon from "@mui/icons-material/KeyboardReturnRounded";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateUserInfo } from "../../redux/actions/userAction";
import { db } from "../../firebase/firebase";
import { doc, updateDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { toast } from "react-toastify";
import {
  StateType,
  ProductType,
  UserInfoType,
} from "../../interfaces/interface";
import {
  CartProductWrapper,
  LeftSection,
  RightSection,
  ProductImage,
  RightSectionTop,
  ProductBrand,
  ProductTitle,
  QuantitySection,
  AlterQuantity,
  ProductPrice,
  MaximumPrice,
  DiscountPercent,
  DiscountPrice,
  ReturnSection,
  ReturnDays,
  ReturnLightContent,
} from "./CartProduct.styles";

interface PropType {
  data: ProductType;
}

function CartProduct(props: PropType) {
  const dispatch = useDispatch();
  const userInfo = useSelector(
    (state: StateType) => state.userReducer
  ) as UserInfoType;

  const removeFromCart = () => {
    return userInfo.cart_items.filter((item: ProductType) => {
      return !(item.product_id === props.data.product_id);
    });
  };

  const handleRemove = async () => {
    const docRef = doc(db, "users", userInfo.email);
    dispatch(updateUserInfo({ ...userInfo, cart_items: removeFromCart() }));
    await updateDoc(docRef, { cart_items: removeFromCart() });
    toast("Item is Removed from the cart !");
  };

  const decreaseProductQuantity = () => {
    return userInfo.cart_items.map((item: ProductType) => {
      if (item.product_id === props.data.product_id) {
        if (item.quantity === 1)
          toast("Product Quantity cannot be less than 1");
        return {
          ...item,
          quantity: item.quantity - 1 > 1 ? item.quantity - 1 : 1,
        };
      }
      return item;
    });
  };

  const incrementProductQuantity = () => {
    return userInfo.cart_items.map((item: ProductType) => {
      if (item.product_id === props.data.product_id)
        return { ...item, quantity: item.quantity + 1 };
      return item;
    });
  };

  const handleDecrease = async () => {
    const docRef = doc(db, "users", userInfo.email);
    const listAfterUpdatingQuantity = decreaseProductQuantity();
    dispatch(
      updateUserInfo({ ...userInfo, cart_items: listAfterUpdatingQuantity })
    );
    await updateDoc(docRef, { cart_items: listAfterUpdatingQuantity });
  };

  const handleIncrease = async () => {
    const docRef = doc(db, "users", userInfo.email);
    dispatch(
      updateUserInfo({ ...userInfo, cart_items: incrementProductQuantity() })
    );
    await updateDoc(docRef, { cart_items: incrementProductQuantity() });
  };

  return (
    <CartProductWrapper>
      <LeftSection>
        <Link to={`/product/${props.data.product_id}`} state={props.data}>
          <ProductImage src={props.data.image_url} />
        </Link>
      </LeftSection>
      <RightSection>
        <RightSectionTop>
          <div>
            <ProductBrand>{props.data.brand}</ProductBrand>
            <ProductTitle>{props.data.title}</ProductTitle>
          </div>
          <ClearIcon onClick={handleRemove} className="remove-icon" />
        </RightSectionTop>

        <QuantitySection>
          <AlterQuantity onClick={handleDecrease}>
            <RemoveIcon />
          </AlterQuantity>
          <div>{props.data.quantity}</div>
          <AlterQuantity onClick={handleIncrease}>
            <AddIcon />
          </AlterQuantity>
        </QuantitySection>

        <ProductPrice>
          <DiscountPrice>Rs. {props.data.discount_price}</DiscountPrice>
          <MaximumPrice>
            <del>Rs. {props.data.max_price}</del>
          </MaximumPrice>
          <DiscountPercent>
            ({props.data.discount_percent}% OFF)
          </DiscountPercent>
        </ProductPrice>

        <ReturnSection>
          <KeyboardReturnRoundedIcon className="return-icon" />
          <ReturnDays>14 days</ReturnDays>
          <ReturnLightContent>return available</ReturnLightContent>
        </ReturnSection>
      </RightSection>
    </CartProductWrapper>
  );
}

export default CartProduct;
