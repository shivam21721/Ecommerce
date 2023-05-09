import React from "react";
import {
  NoUserWrapper,
  Title,
  TextContent,
  Image,
  LoginLink,
} from "./NoUser.style";

interface propType {
  routeName: string;
}

function NoUser(props: propType) {
  return (
    <NoUserWrapper data-testid = "logoutWishlistCartElement">
      <Title>PLEASE LOG IN</Title>
      <TextContent>Login to view items in your {props.routeName}.</TextContent>
      {props.routeName === "wishlist" ? (
        <Image src="https://static.vecteezy.com/system/resources/thumbnails/016/133/639/small_2x/wishlist-icon-in-comic-style-like-document-cartoon-illustration-on-white-isolated-background-favorite-list-splash-effect-business-concept-vector.jpg" />
      ) : (
        <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSETcS3AlKxbLYN0ZThbgCs0xAfDxP_mfS0ug&usqp=CAU" />
      )}

      <LoginLink to="/login">LOGIN</LoginLink>
    </NoUserWrapper>
  );
}

export default NoUser;
