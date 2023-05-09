import React from "react";
import { fireEvent, getByText, render, screen, waitFor } from "@testing-library/react";
import store from "../redux/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import SignUp from "../pages/Authentication/SignUp";

describe("Login Page", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <SignUp />
        </BrowserRouter>
      </Provider>
    );
  });

  test("Create New Account is showing", () => {
    const SignupTitle = screen.getByRole("heading", {
      name: /create new account/i,
    });
    expect(SignupTitle).toBeInTheDocument();
  })

  test("OnClick on signup button if the credentials are right then route should change to home", () => {
    const name = screen.getByRole("textbox", { name: /name/i });
    fireEvent.change(name, {
      target: { value: "test" },
    });
    const email = screen.getByRole("textbox", { name: /email/i });
    fireEvent.change(email, {
      target: { value: "test@gmail.com" },
    });
    const password = screen.getByLabelText(/password/i);
    fireEvent.change(password, {
      target: { value: "123456" },
    });
    const signupButton = screen.getByRole('button', {  name: /sign up/i})
    fireEvent.click(signupButton);
    expect(location.pathname).toBe("/");
  })

  test("If any field is empty than error should display", () => {
    const name = screen.getByRole("textbox", { name: /name/i });
    fireEvent.change(name, {
      target: { value: "test" },
    });
    const email = screen.getByRole("textbox", { name: /email/i });
    fireEvent.change(email, {
      target: { value: "test@gmail.com" },
    });
    const signupButton = screen.getByRole("button", { name: /sign up/i });
    fireEvent.click(signupButton);
    const error = screen.getByText(/Input Fields can not be empty/i);
    expect(error).toBeInTheDocument(); 
  })

  test("aad", () => {
    const brandName = screen.getByRole("heading", {
      name: /the gentleman's attire/i,
    });
    expect(brandName).toBeInTheDocument(); 
  }) 
});
