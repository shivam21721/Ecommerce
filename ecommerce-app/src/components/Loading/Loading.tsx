import React from "react";
import ReactLoading from "react-loading";
import { LoadingWrapper } from "./Loading.styles";

function Loading() {
  return (
    <LoadingWrapper data-testid = "loading">
      <ReactLoading
        type={"spinningBubbles"}
        color={"#383838"}
        height={"100px"}
        width={"100px"}
      />
    </LoadingWrapper>
  );
}

export default Loading;
