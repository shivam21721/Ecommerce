import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import store from "../redux/store";
import { Provider } from "react-redux";
import Filter from "../components/Filter/Filter";

describe("HomeCategoryNavbar", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Filter/>
        </BrowserRouter>
      </Provider>
    );
  });

  test("Filter Dropdown button is present", () => {
    const FilterDropdwonButton = screen.getByRole("heading", {
      name: /filter/i,
    });
    expect(FilterDropdwonButton).toBeInTheDocument(); 
  }) 

  test("On move on Filter Dropdown button Dropdown is showing", () => {
    const FilterDropdwonButton = screen.getByRole("heading", {
      name: /filter/i,
    });
    fireEvent.mouseMove(FilterDropdwonButton)
    const filterDropdown = screen.getByTestId("FilterDropdown");
    expect(filterDropdown).toBeInTheDocument(); 
  })

  test("On mouse leave on Filter Dropdown button Dropdown is removing", () => {
    const FilterDropdwonButton = screen.getByRole("heading", {
      name: /filter/i,
    });
    fireEvent.mouseMove(FilterDropdwonButton);
    const filterDropdown = screen.getByTestId("FilterDropdown");
    expect(filterDropdown).toBeInTheDocument();
    fireEvent.mouseLeave(FilterDropdwonButton)
    expect(filterDropdown).not.toBeInTheDocument();      
  })

  test("Price Slider and range slider are present", () => {
    const FilterDropdwonButton = screen.getByRole("heading", {
    name: /filter/i,
    });
    fireEvent.mouseMove(FilterDropdwonButton);
    const priceSlider = screen.getByTestId("PriceSlider");
    expect(priceSlider).toBeInTheDocument();
    const ratingSlider = screen.getByTestId("RatingSlider");
    expect(ratingSlider).toBeInTheDocument();
  })

  test("On move on Filter Dropdown Dropdown is showing", () => {
    const FilterDropdwonButton = screen.getByRole("heading", {
      name: /filter/i,
    });
    fireEvent.mouseMove(FilterDropdwonButton);
    const filterDropdown = screen.getByTestId("FilterDropdown");
    fireEvent.mouseMove(filterDropdown);
    
    expect(filterDropdown).toBeInTheDocument();
  });
  test("On leave on Filter Dropdown Dropdown is showing", () => {
    const FilterDropdwonButton = screen.getByRole("heading", {
      name: /filter/i,
    });
    fireEvent.mouseMove(FilterDropdwonButton);
    const filterDropdown = screen.getByTestId("FilterDropdown");
    fireEvent.mouseMove(filterDropdown);
    fireEvent.mouseLeave(filterDropdown)
    expect(filterDropdown).not.toBeInTheDocument(); 
  });

  
});
