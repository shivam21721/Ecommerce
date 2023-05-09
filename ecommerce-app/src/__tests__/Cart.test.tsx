import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import store from "../redux/store";
import { UserInfoType } from "../interfaces/interface";
import Wishlist from "../pages/Wishlist";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import Cart from "../pages/Cart";

describe("Cart", () => {
  const productData = {
    brand: "Peter England",
    category: "Formal",
    current_stock: "5",
    description: "Best product by peter england",
    discount_percent: 15,
    discount_price: 4299,
    image_url:
      "https://imagescdn.vanheusenindia.com/img/app/product/8/860566-10159764.jpg?q=75&auto=format&w=387",
    max_price: 4999,
    rating: 4.3,
    title: "black classic shirt",
    total_reviews: 223,
    wishlisted: false,
    product_id: "23",
    quantity: 3,
  };
  beforeEach(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <NavigationBar />
          <Cart/>
        </BrowserRouter>
      </Provider>
    );
  });
  test("Empty Cart component is rendering if the Cart is empty", async () => {
    act(() => {
      store.dispatch({
        type: "UPDATE_USER_INFO",
        payload: {
          userStatus: true,
          name: "temp",
          email: "",
          order_history: [],
          cart_items: [],
          wishlist_items: [],
        },
      });
    });
    const cartElement = screen.getByTestId("cartElement");
    fireEvent.click(cartElement);
    expect(location.pathname).toBe("/cart");

    await waitFor(() => screen.getByTestId("EmptyCartElement"));
    expect(screen.getByTestId("EmptyCartElement")).toBeInTheDocument(); 
  });

  test("If the user in logged out Cart login page is showing", async () => {
    act(() => {
      store.dispatch({
        type: "UPDATE_USER_INFO",
        payload: {
          userStatus: false,
          name: "temp",
          email: "",
          order_history: [],
          cart_items: [],
          wishlist_items: [],
        },
      });
    });
    const cartElement = screen.getByTestId("cartElement");
    fireEvent.click(cartElement);
    expect(location.pathname).toBe("/cart"); 

    await waitFor(() => screen.getByTestId("logoutWishlistCartElement"));
    expect(screen.getByTestId("logoutWishlistCartElement")).toBeInTheDocument();
  });  
});
