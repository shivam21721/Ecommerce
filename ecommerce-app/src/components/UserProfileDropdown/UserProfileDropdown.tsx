import React from "react";
import { useNavigate } from "react-router-dom";
import { StateType, UserInfoType } from "../../interfaces/interface";
import { useSelector, useDispatch } from "react-redux";
import { updateUserInfo } from "../../redux/actions/userAction";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import {
  LogoutProfileDropdown,
  LoginSignupButton,
  LoginProfileDropdown,
  LoginProfileDropdownLink,
  LinkName,
} from "./UserProfileDropdown.styles";

function UserProfileDropdown() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const myState = useSelector(
    (state: StateType) => state.userReducer
  ) as UserInfoType;

  const handleLogout = () => {
    dispatch(
      updateUserInfo({
        userStatus: false,
        name: "",
        email: "",
        order_history: [],
        cart_items: [],
        wishlist_items: [],
      })
    );
    localStorage.setItem("user_id", "null");
  };

  if (myState.userStatus === false)
    return (
      <LogoutProfileDropdown data-testid="logoutProfileDropdown">
        <h3>WELCOME!</h3>
        <p>Enjoy a tailored shopping experience.</p>
        <LoginSignupButton onClick={() => navigate("/login")}>
          LOG IN / SIGN UP
        </LoginSignupButton>
      </LogoutProfileDropdown>
    );
  else
    return (
      <LoginProfileDropdown data-testid="loginProfileDropdown">
        <h3>Hi, {myState.name}!</h3>

        <LoginProfileDropdownLink
          to="/orders" data-testid = "dropdownOrderElement"
        >
          <DescriptionOutlinedIcon />
          <LinkName>MY ORDERS</LinkName>
        </LoginProfileDropdownLink>

        <LoginProfileDropdownLink
          to="/wishlist"
          data-testid="dropdownWishlistElement"
        >
          <FavoriteBorderOutlinedIcon />
          <LinkName>MY WISHLIST</LinkName>
        </LoginProfileDropdownLink>

        <LoginProfileDropdownLink to="/cart" data-testid = "dropdownCartElement">
          <ShoppingBagOutlinedIcon />
          <LinkName>MY CART</LinkName>
        </LoginProfileDropdownLink>

        <LoginProfileDropdownLink to="/" onClick={handleLogout}>
          <LogoutOutlinedIcon />
          <LinkName>LOG OUT</LinkName>
        </LoginProfileDropdownLink>
      </LoginProfileDropdown>
    );
}

export default UserProfileDropdown;
