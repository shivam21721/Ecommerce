import styled from "styled-components";

export const ItemWrapper = styled.div`
  width: 250px;
  height: 380px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 10px;
  margin: 0 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  h2 {
    margin: 10px 0;
  }
  h4 {
    color: #383838;
    font-size: 16px;
  }
`;

export const ItemImage = styled.img`
  width: 200px;
  height: 250px;
`;
