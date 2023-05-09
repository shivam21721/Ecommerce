import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import store from "../redux/store";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";

describe("Home page", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>
    );
  });

  test("Carousel component is rendering in the home page",  () => {
    const ImageCarousel = screen.getByTestId("ImageCarousel");
    expect(ImageCarousel).toBeInTheDocument();
  });

  test("All products component is rendering", () => {  
    waitFor(() =>  expect(screen.getByTestId("AllProductContainer")).toBeInTheDocument() );
  });

  test("Category navbar is showing in the home page", () => {
    const CategoryNavbar = screen.getByTestId("CategoryNavbar"); 
    expect(CategoryNavbar).toBeInTheDocument();
  })  
}); 
