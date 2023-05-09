import styled from "styled-components";

export const ProductWrapper = styled.div`
  padding: 10px;
  margin: 20px;
  border: 1px solid white;
  transition: all 0.2s ease-in-out;
  &:hover {
    border: 1px solid lightgray;
    box-shadow: 0 0 8px #888888;
    transform: scale(1.01);
  }
  .wishlistIcon {
    cursor: pointer;
  }
`;

export const ProductImage = styled.img`
  width: 220px;
  height: 320px;
`;

export const ProductRating = styled.div`
  margin: -35px 0 8px 10px;
  background-color: white;
  opacity: 0.9;
  width: 80px;
  text-align: center;
  position: relative;
  padding: 2px;
  border-radius: 2px;
`;

export const ProductBrandAndWishlistWrapper = styled.div`
  width: 220px;
  display: flex;
  justify-content: space-between;
`;

export const ProductBrand = styled.h1`
  font-size: 20px;
  font-weight: bold;
`;

export const ProductTitle = styled.h3`
  font-size: 15px;
  color: gray;
  font-weight: 500;
  margin-bottom: 5px;
`;

export const ProductPrice = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DiscountPrice = styled.span`
  font-weight: 600;
  font-size: 18px;
`;

export const MaximumPrice = styled.span`
  color: gray;
  font-size: 15px;
`;

export const DiscountPercent = styled.span`
  color: orange;
  font-size: 15px;
`;
