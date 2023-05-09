import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import LocalMallRoundedIcon from "@mui/icons-material/LocalMallRounded";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import UserProfileDropdown from "../UserProfileDropdown/UserProfileDropdown";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  StateType,
  UserInfoType,
  ProductType,
} from "../../interfaces/interface";
import {
  Navbar,
  SearchBar,
  Title,
  NavbarItemWrapper,
  NavbarItem,
  UserProfileDropdownWrapper,
  SearchInput,
  NavbarLink,
  BagProductsCount,
  BagIcon,
} from "./NavigationBar.styles";

function NavigationBar() {
  const { pathname } = useLocation();
  const userInfo = useSelector(
    (state: StateType) => state.userReducer
  ) as UserInfoType;

  const [isHoverOnProfile, setIsHoverOnProfile] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const totalCartQuantity = userInfo.cart_items.reduce(
    (quantity: number, item: ProductType) => {
      return quantity + item.quantity;
    },
    0
  );

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter") {
      navigate("/search", {
        state: {
          value: searchValue,
        },
      });
      setSearchValue("");
    }
  };

  if (pathname === "/login" || pathname === "/signup") return null;

  return (
    <>
      <Navbar>
        <Title to="/">The Gentleman's Attire</Title>
        <SearchBar>
          <SearchIcon />
          <SearchInput
            type="search"
            placeholder="Search Products.."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyDown={handleSearch}
          />
        </SearchBar>
        <NavbarItemWrapper>
          <NavbarItem
            data-testid="profileIcon"
            onMouseLeave={() => setIsHoverOnProfile(false)}
            onMouseOver={() => setIsHoverOnProfile(true)}
          >
            <PersonIcon />
            <span>Profile</span>
          </NavbarItem>

          <NavbarLink to="/wishlist" data-testid="wishlistElement">
            <FavoriteIcon />
            <span>Wishlist</span>
          </NavbarLink>

          <NavbarLink to="/cart" data-testid="cartElement">
            <BagIcon>
              <LocalMallRoundedIcon />
              {totalCartQuantity > 0 && (
                <BagProductsCount>{totalCartQuantity}</BagProductsCount>
              )}
            </BagIcon>
            <span>Bag</span>
          </NavbarLink>
        </NavbarItemWrapper>
      </Navbar>

      {isHoverOnProfile && (
        <UserProfileDropdownWrapper
          data-testid="profile-dropdown"
          onMouseLeave={() => setIsHoverOnProfile(false)}
          onMouseOver={() => setIsHoverOnProfile(true)}
          onClick={() => setIsHoverOnProfile(false)}
        >
          <UserProfileDropdown />
        </UserProfileDropdownWrapper>
      )}
    </>
  );
}

export default NavigationBar;
