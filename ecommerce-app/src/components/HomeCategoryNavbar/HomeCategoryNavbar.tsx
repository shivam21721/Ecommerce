import { NavbarWrapper, NavbarItem } from "./HomeCategoryNavbar.styles";

function HomeCategoryNavbar() {
  return (
    <NavbarWrapper data-testid = "CategoryNavbar">
      <NavbarItem to="/">
        <h1>All Products</h1>
      </NavbarItem>

      <NavbarItem to="/shop/formals" data-testid="FormalCategoryElement">
        <h1>Formals</h1>
      </NavbarItem>

      <NavbarItem to="/shop/blazers" data-testid="BlazerCategoryElement">
        <h1>Blazers</h1>
      </NavbarItem>

      <NavbarItem to="/shop/watches" data-testid="WatchCategoryElement">
        <h1>Watches</h1>
      </NavbarItem>

      <NavbarItem to="/shop/shoes" data-testid="ShoesCategoryElement">
        <h1>Shoes</h1>
      </NavbarItem>
    </NavbarWrapper>
  );
}

export default HomeCategoryNavbar;
