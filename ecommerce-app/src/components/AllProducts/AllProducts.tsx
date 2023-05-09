import { useState, useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { StateType, ProductType, FilterType } from "../../interfaces/interface";
import Loading from "../Loading/Loading";
import { updateFilter } from "../../redux/actions/filterAction";
import {
  ProductWrapper,
  NoFilterResult,
  NoFilterResultContent,
  NoFilterResultHeading,
} from "./AllProducts.styles";

function AllProducts() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const productList = useSelector(
    (state: StateType) => state.productReducer
  ) as ProductType[];

  const filter = useSelector(
    (state: StateType) => state.filterReducer
  ) as FilterType;

  const filteredProductList = productList.filter((product) => {
    if (
      product.discount_price >= filter.minPrice &&
      product.discount_price <= filter.maxPrice &&
      product.rating >= filter.minRating &&
      product.rating <= filter.maxRating
    )
      return true;
    else return false;
  });

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [filter]);

  useEffect(() => {
    dispatch(
      updateFilter({
        maxPrice: 10000,
        minPrice: 1000,
        minRating: 1,
        maxRating: 5,
      })
    );
  }, []);

  if (loading) return <Loading />;
  return (
    <ProductWrapper data-testid = "AllProductContainer">
      {filteredProductList.length === 0 && (
        <NoFilterResult>
          <NoFilterResultHeading>NO RESULT FOUND</NoFilterResultHeading>
          <NoFilterResultContent>
            Please change your filter range.
          </NoFilterResultContent>
        </NoFilterResult>
      )}
      {filteredProductList.map((product: ProductType) => (
        <ProductCard data={product} />
      ))}
    </ProductWrapper>
  );
}

export default AllProducts;
