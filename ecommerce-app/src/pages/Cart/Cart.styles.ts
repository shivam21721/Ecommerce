import styled from "styled-components";

export const CartWrapper = styled.div`
  display: flex;
  padding: 50px;
  justify-content: space-between; 
`;

export const CartProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  overflow: scroll;
  height: calc(100vh - 80px);
  &::-webkit-scrollbar {
    display: none;
  }
`;
