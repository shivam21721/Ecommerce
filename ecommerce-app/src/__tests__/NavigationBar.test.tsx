import React from "react";
import {
  render,
  screen,
  getByTestId,
  waitFor,
  fireEvent,
  act,
} from "@testing-library/react";
import { BrowserRouter, Routes, useLocation } from "react-router-dom";
import store from "../redux/store";
import { Provider } from "react-redux";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import { UserInfoType } from "../interfaces/interface";

describe("NavigationBar", () => {
  const dummyUserData: UserInfoType = {
    userStatus: true,
    name: "",
    email: "",
    order_history: [],
    cart_items: [],
    wishlist_items: [],
  };
  beforeEach(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <NavigationBar />
        </BrowserRouter>
      </Provider>
    );
  });
  test("Brand Logo is present", () => {
    const brandLogoElement = screen.getByRole("link", {
      name: /the gentleman's attire/i,
    });
    expect(brandLogoElement).toBeInTheDocument();
  });

  test("Search bar test", () => {
    const searchElement = screen.getByPlaceholderText("Search Products..");
    expect(searchElement).toBeInTheDocument();
  });

  test("Profile Icon is Present", () => {
    const profileIconElement = screen.getByTestId("profileIcon");
    expect(profileIconElement).toBeInTheDocument();
  });

  test("On hover profile dropdown is showing", () => {
    const profileIcon = screen.getByTestId("profileIcon");
    fireEvent.mouseOver(profileIcon);
    const profileDropdownElement = screen.getByTestId("profile-dropdown");
    expect(profileDropdownElement).toBeInTheDocument();
  });

  test("Wishlist link is working", () => {
    const wishlistElement = screen.getByTestId("wishlistElement");
    fireEvent.click(wishlistElement);
    expect(window.location.href).toBe("http://localhost/wishlist");
  });
  test("Cart link is working", () => {
    const cartElement = screen.getByTestId("cartElement");
    fireEvent.click(cartElement);
    expect(window.location.href).toBe("http://localhost/cart");
  });
  test("Home link is working", () => {
    const HomeElement = screen.getByRole("link", {
      name: /the gentleman's attire/i,
    });
    fireEvent.click(HomeElement);
    expect(location.pathname).toBe("/");
  });

  test("Redirecting to the search page on pressing ", () => {
    const searchBox = screen.getByRole("searchbox");
    fireEvent.keyDown(searchBox, { code: "Enter" });
    expect(window.location.href).toBe("http://localhost/search");
  });

  test("If the user is login than user login dropdown should display", () => {
    act(() => {
      store.dispatch({
        type: "UPDATE_USER_INFO",
        payload: dummyUserData,
      });
    });
    const profileIcon = screen.getByTestId("profileIcon");
    fireEvent.mouseOver(profileIcon);
    const loginProfileDropdown = screen.getByTestId("loginProfileDropdown");
    expect(loginProfileDropdown).toBeInTheDocument();
  });
  test("If the user is logout than user logout dropdown should display", () => {
    act(() => {
      store.dispatch({
        type: "UPDATE_USER_INFO",
        payload: {
          userStatus: false,
          name: "",
          email: "",
          order_history: [],
          cart_items: [],
          wishlist_items: [],
        },
      });
    });
    const profileIcon = screen.getByTestId("profileIcon");
    fireEvent.mouseOver(profileIcon);
    const logoutProfileDropdown = screen.getByTestId("logoutProfileDropdown");
    expect(logoutProfileDropdown).toBeInTheDocument();
  });

  test("On clicking wishlist in dropdown route changes to wishlist", () => {
    act(() => {
      store.dispatch({
        type: "UPDATE_USER_INFO",
        payload: dummyUserData,
      });
    });
    const profileIcon = screen.getByTestId("profileIcon");
    fireEvent.mouseOver(profileIcon);
    const dropdownWishlistElement = screen.getByTestId(
      "dropdownWishlistElement"
    );
    fireEvent.click(dropdownWishlistElement);
    expect(location.pathname).toBe("/wishlist");
  });

  test("On clicking My cart in dropdown route changes to cart", () => {
    act(() => {
      store.dispatch({
        type: "UPDATE_USER_INFO",
        payload: dummyUserData,
      });
    });
    const profileIcon = screen.getByTestId("profileIcon");
    fireEvent.mouseOver(profileIcon);
    const dropdownCartElement = screen.getByTestId(
      "dropdownCartElement"
    );
    fireEvent.click(dropdownCartElement);
    expect(location.pathname).toBe("/cart");
  });

  test("On clicking Myorder in dropdown route changes to order", () => {
    act(() => {
      store.dispatch({
        type: "UPDATE_USER_INFO",
        payload: dummyUserData,
      });
    });
    const profileIcon = screen.getByTestId("profileIcon");
    fireEvent.mouseOver(profileIcon);
    const dropdownOrderElement = screen.getByTestId("dropdownOrderElement");
    fireEvent.click(dropdownOrderElement);
    expect(location.pathname).toBe("/orders"); 
  }); 
});
