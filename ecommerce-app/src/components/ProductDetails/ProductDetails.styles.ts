import styled from "styled-components";

export const ProductDetailsWrapper = styled.div`
  display: flex;
  padding: 50px 100px;
`;

export const RightSection = styled.div`
  padding-left: 200px;
  width: 100%;
`;

export const LeftSection = styled.div``;

export const ProductImage = styled.img`
  width: 300px;
  height: 450px;
`;

export const ProductTitle = styled.div`
  color: grey;
  font-weight: 500;
  font-size: 20px;
`;

export const RatingSection = styled.div`
  border: 1px solid lightgray;
  width: 170px;
  display: flex;
  padding: 5px 10px;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const AverageRating = styled.span`
  font-weight: bold;
  font-size: 20px;
`;

export const TotalReviews = styled.span`
  color: gray;
  border-left: 2px solid grey;
  padding-left: 5px;
  margin-left: 5px;
`;

export const HorizontalRow = styled.hr`
  margin-top: 10px;
  width: 100%;
`;

export const ProductPriceSection = styled.div`
  width: 400px;
  display: flex;
  justify-content: start;
  align-items: center;
  font-size: 25px;
  margin-top: 20px;
`;

export const DiscountPrice = styled.span`
  font-weight: 600;
  margin-right: 20px;
`;

export const MaximumPrice = styled.span`
  color: gray;
  margin-right: 20px;
`;

export const DiscountPercent = styled.span`
  color: orange;
`;

export const ButtonSection = styled.div`
  display: flex;
  margin-top: 60px;
  .icon {
    margin-left: 10px;
  }
`;

export const AddToCartButton = styled.button`
  background-color: #383838;
  color: white;
  padding: 18px 35px;
  margin-right: 50px;
  border-radius: 8px;
  outline: none;
  border: none;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const AddToWishlistButton = styled.button`
  background-color: ghostwhite;
  color: gray;
  font-size: 16px;
  padding: 18px 30px;
  border-radius: 8px;
  outline: none;
  border: 2px solid gray;
  font-weight: 600;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    border: 2px solid black;
    color: black;
  }
`;

export const WishlistedButton = styled.div`
  background-color: #383838;
  color: white;
  padding: 18px 35px;
  margin-right: 50px;
  border-radius: 8px;
  outline: none;
  border: none;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  align-items: center;
  &:hover {
    opacity: 0.8;
  }
`;

export const ProductDetailTitle = styled.h2`
  margin-top: 20px;
`;

export const ProductDescription = styled.p`
  margin-top: 10px;
  font-size: 17px;
  color: darkgrey;
`;
