import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StateType, ProductType, FilterType } from "../../interfaces/interface";
import { useParams } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import { useState } from "react";
import Loading from "../Loading/Loading";
import { updateFilter } from "../../redux/actions/filterAction";
import {
  ProductWrapper,
  NoFilterResult,
  NoFilterResultContent,
  NoFilterResultHeading,
} from "./ProductContainer.styles";

function ProductContainer() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { categoryName } = useParams();

  const productList = useSelector(
    (state: StateType) => state.productReducer
  ) as ProductType[];

  const filters = useSelector(
    (state: StateType) => state.filterReducer
  ) as FilterType;

  const filteredProductList = productList.filter((product) => {
    if (
      product.discount_price >= filters.minPrice &&
      product.discount_price <= filters.maxPrice &&
      product.rating >= filters.minRating &&
      product.rating <= filters.maxRating &&
      product.category === categoryName
    )
      return true;
    else return false;
  });

  useEffect(() => {
    dispatch(
      updateFilter({
        maxPrice: 10000,
        minPrice: 1000,
        minRating: 1,
        maxRating: 5,
      })
    );
  }, [categoryName]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [filters, categoryName]);

  if (loading) return <Loading />;

  return (
    <ProductWrapper>
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

export default ProductContainer;
