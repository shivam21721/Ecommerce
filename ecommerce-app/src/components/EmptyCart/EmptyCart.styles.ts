import styled from "styled-components"; 

export const EmptyCartWrapper = styled.div`
  width: 100vw;
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h2 {
    color: #383838;
    margin: 10px;
  }
  p {
    color: grey;
    margin: 10px;
    font-size: 20px;
  }
`;
