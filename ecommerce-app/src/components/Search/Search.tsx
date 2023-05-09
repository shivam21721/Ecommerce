import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { StateType, ProductType, FilterType } from "../../interfaces/interface";
import ProductCard from "../ProductCard/ProductCard";
import Filter from "../Filter/Filter";
import Loading from "../Loading/Loading";
import { updateFilter } from "../../redux/actions/filterAction";
import {
  SearchTitle,
  SearchValue,
  ProductWrapper,
  NoSearchResult,
  SearchWrapper,
  NoFilterResult,
  NoFilterResultContent,
  NoFilterResultHeading,
} from "./Search.styles";

function Search() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchValue = useLocation().state.value;
  const [loading, setLoading] = useState(false);

  const productList = useSelector(
    (state: StateType) => state.productReducer
  ) as ProductType[];

  if (searchValue === "") navigate("/");

  const productsRelatedToSearch = productList.filter((product) => {
    return searchValue
      .toLowerCase()
      .split(" ")
      .every((word: string) => {
        return (
          product.title.toLowerCase().includes(word) ||
          product.brand.toLowerCase().includes(word)
        );
      });
  });

  const filter = useSelector(
    (state: StateType) => state.filterReducer
  ) as FilterType;

  const filteredProductList = productsRelatedToSearch.filter((product) => {
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
    dispatch(
      updateFilter({
        maxPrice: 10000,
        minPrice: 1000,
        minRating: 1,
        maxRating: 5,
      })
    );
  }, []);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  if (loading) return <Loading />;

  return (
    <SearchWrapper>
      {productsRelatedToSearch.length > 0 ? (
        <div>
          <SearchTitle>
            RESULTS FOR
            <SearchValue>{searchValue.toUpperCase()}</SearchValue>
          </SearchTitle>
          <Filter />
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
        </div>
      ) : (
        <NoSearchResult>
          NO RESULTS FOUND FOR
          <SearchValue>{searchValue.toUpperCase()!}</SearchValue>
        </NoSearchResult>
      )}
    </SearchWrapper>
  );
}

export default Search;
