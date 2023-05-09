import React from "react";
import { render, screen} from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import store from "../redux/store";
import { Provider } from "react-redux";
import Footer from "../components/Footer/Footer";

 describe("HomeCategoryNavbar", () => {
//   beforeEach(() => {
//     render(
//       <Provider store={store}>
//         <BrowserRouter>
//           <Footer/>
//         </BrowserRouter>
//       </Provider>
//     );
//   });

  test("Brand Name is present", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Footer />
        </BrowserRouter>
      </Provider>
    );
    const name = screen.getByRole("heading", {
      name: /the gentleman's attire/i,
    });
    expect(name).toBeInTheDocument(); 
  })

  test("should return null when pathname is /login", () => {
    const { queryByTestId } = render(
      <MemoryRouter initialEntries={["/login"]}>
        <Footer />
      </MemoryRouter>
    );
    expect(queryByTestId("footer-wrapper")).not.toBeInTheDocument();     
  });
  
});
