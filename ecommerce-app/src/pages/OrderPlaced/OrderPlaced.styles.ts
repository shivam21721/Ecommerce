import styled from "styled-components";

export const OrderPlacedWrapper = styled.div`
  width: 100vw;
  height: calc(100vh - 80px);
  color: green;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  .transition {
    transition: all 1s ease-in-out;
    transform: scale(1.3);
  }
`;
