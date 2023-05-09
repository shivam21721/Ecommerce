import React from "react";
import {
  render,
  screen,
  fireEvent,
} from "@testing-library/react";
import { BrowserRouter} from "react-router-dom";
import store from "../redux/store";
import { Provider } from "react-redux";
import HomeCategoryNavbar from "../components/HomeCategoryNavbar/HomeCategoryNavbar";

describe("HomeCategoryNavbar", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <HomeCategoryNavbar />
        </BrowserRouter>
      </Provider>
    );
  });
  
  test("Formal category is present", () => {
    const FormalCategoryElement = screen.getByTestId("FormalCategoryElement");
    expect(FormalCategoryElement).toBeInTheDocument();
  })
  test("Blazers category is present", () => {
    const BlazerCategoryElement = screen.getByTestId("BlazerCategoryElement");
    expect(BlazerCategoryElement).toBeInTheDocument(); 
  })
  test("Watches category is present", () => {
    const WatchCategoryElement = screen.getByTestId("WatchCategoryElement");
    expect(WatchCategoryElement).toBeInTheDocument();
  })
  test("Shoes category is present", () => {
    const ShoesCategoryElement = screen.getByTestId("ShoesCategoryElement");
    expect(ShoesCategoryElement).toBeInTheDocument(); 
  })

  test("On click on formal route is changing to formals", () => {
    const FormalCategoryElement = screen.getByTestId("FormalCategoryElement");
    fireEvent.click(FormalCategoryElement);
    expect(location.pathname).toBe("/shop/formals");
  });
  test("On click on Blazer route is changing to Blazers", () => {
    const BlazerCategoryElement = screen.getByTestId("BlazerCategoryElement");
    fireEvent.click(BlazerCategoryElement);
    expect(location.pathname).toBe("/shop/blazers");
  });
  test("On click on watch route is changing to watches", () => {
    const WatchCategoryElement = screen.getByTestId("WatchCategoryElement");
    fireEvent.click(WatchCategoryElement);
    expect(location.pathname).toBe("/shop/watches");
  });
  test("On click on shoes route is changing to shoes", () => {
    const ShoesCategoryElement = screen.getByTestId("ShoesCategoryElement");
    fireEvent.click(ShoesCategoryElement);
    expect(location.pathname).toBe("/shop/shoes"); 
  });
});
