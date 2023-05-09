import styled from "styled-components";

export const CartProductWrapper = styled.div`
  width: 95%;
  border: 1px solid lightgray;
  padding: 10px;
  display: flex;
  margin: 10px 0;
  transition: all 0.2s ease-in-out;
  &:hover {
    border: 1px solid grey;
    box-shadow: 0 0 8px #888888;
    transform: scale(1.01);
  }
`;

export const LeftSection = styled.div`
  width: 30%;
`;

export const RightSection = styled.div`
  width: 70%;
`;

export const ProductImage = styled.img`
  height: 200px;
  width: 150px;
`;

export const RightSectionTop = styled.div`
  display: flex;
  justify-content: space-between;
  .remove-icon {
    cursor: pointer;
  }
  .remove-icon:hover {
    background-color: gray;
    opacity: 0.8;
    border-radius: 50%;
  }
`;

export const ProductBrand = styled.h1``;

export const ProductTitle = styled.h3`
  color: grey;
  font-weight: 500;
`;

export const QuantitySection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid grey;
  width: 90px;
  margin: 30px 0 20px 0;
`;

export const AlterQuantity = styled.div`
  width: 30px;
  padding: 5px;
  background-color: #888888;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #383838;
  }
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

export const ReturnSection = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  .return-icon {
    background-color: lightgray;
    border-radius: 50%;
    opacity: 0.8;
    font-size: 10px;
  }
`;

export const ReturnDays = styled.span`
  margin: 0 5px;
`;

export const ReturnLightContent = styled.span`
  color: gray;
`;
