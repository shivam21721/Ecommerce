import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import store from "../redux/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import LogIn from "../pages/Authentication/LogIn";

describe("Login Page", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <LogIn />
        </BrowserRouter>
      </Provider>
    );
  });

  test("BrandName is showing on the login page", () => {
    const BrandnameElement = screen.getByRole("heading", {
      name: /the gentleman's attire/i,
    });
    expect(BrandnameElement).toBeInTheDocument(); 
  });
  test("BrandTitle is showing on the login page", () => {
    const BrandTitleElement = screen.getByTestId("BrandTitle");
    expect(BrandTitleElement).toBeInTheDocument();
  });

  test("Email Input is showing on the login page", () => {
    const EmailInputElement = screen.getByRole("textbox", { name: /email/i });
    expect(EmailInputElement).toBeInTheDocument();
  });

  test("On Clicking on Login button route is changing to home", () => {
    const EmailInputElement = screen.getByRole("textbox", { name: /email/i });
    fireEvent.change(EmailInputElement, {
      target: { value: "shiva123khandelwal@gmail.com" },
    });
    const PasswordInputElement = screen.getByLabelText(/password/i);
    fireEvent.change(PasswordInputElement, { target: { value: "123456" } });
    const loginButton = screen.getByRole("button", { name: /log in/i });
    expect(loginButton).toBeInTheDocument();
    fireEvent.click(loginButton);
    expect(location.pathname).toBe("/");
  });

  test("In login page clicking on signup changes the route to signup", () => {
    const signUpLink = screen.getByText(/sign up/i);
    fireEvent.click(signUpLink);
    expect(location.pathname).toBe("/signup");
  });

  test("In case of wrong password Error is showing", async () => {
    const EmailInputElement = screen.getByRole("textbox", { name: /email/i });
    fireEvent.change(EmailInputElement, {
      target: { value: "shiva123khandelwal@gmail.com" },
    });
    const PasswordInputElement = screen.getByLabelText(/password/i);
    fireEvent.change(PasswordInputElement, { target: { value: "shivamto" } });
    const loginButton = screen.getByRole("button", { name: /log in/i });
    fireEvent.click(loginButton);
    await waitFor(() =>
      expect(screen.getByText("Wrong Password")).toBeInTheDocument()
    );
  });
  test("In case of empty input fields error is showing", async () => {
    const EmailInputElement = screen.getByRole("textbox", { name: /email/i });
    fireEvent.change(EmailInputElement, {
      target: { value: "shiva123khandelwal@gmail.com" },
    });
    const loginButton = screen.getByRole("button", { name: /log in/i });
    fireEvent.click(loginButton);
    await waitFor(() =>
      expect(
        screen.getByText("Input Fields can not be empty")
      ).toBeInTheDocument()
    );
  });

  test("On Clicking on Login with right credentials loading is showing", () => {
    const EmailInputElement = screen.getByRole("textbox", { name: /email/i });
    fireEvent.change(EmailInputElement, {
      target: { value: "shiva123khandelwal@gmail.com" },
    });
    const PasswordInputElement = screen.getByLabelText(/password/i);
    fireEvent.change(PasswordInputElement, { target: { value: "123456" } });
    const loginButton = screen.getByRole("button", { name: /log in/i });
    expect(loginButton).toBeInTheDocument();
    fireEvent.click(loginButton);
    waitFor(() => expect(screen.getByTestId("loading")).toBeInTheDocument()) 
     
  });

});
