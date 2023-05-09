import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { auth } from "../../../firebase/firebase";
import { db } from "../../../firebase/firebase";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { useDispatch } from "react-redux";
import {
  updateUserInfo,
  updateUserOrderList,
} from "../../../redux/actions/userAction";
import { UserInfoType } from "../../../interfaces/interface";
import Loading from "../../../components/Loading/Loading";
import {
  LoginWrapper,
  LeftSection,
  RightSection,
  BrandName,
  BrandQuote,
  LoginForm,
  LoginFormInput,
  LoginButton,
  BottomContent,
  SignupLink,
  ErrorText,
} from "./Login.styles";

function LogIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const validateInputFields = () => {
    if (email === "" || password === "") {
      setError("Input Fields can not be empty");
      return false;
    }
    return true;
  };

  const storeUserInfoInRedux = () => {
    const docRef = doc(db, "users", email);
    getDoc(docRef)
      .then((userInfo) => {
        let data = userInfo.data() as UserInfoType;
        dispatch(
          updateUserInfo({
            userStatus: true,
            name: data.name,
            email: email,
            order_history: [],
            cart_items: data.cart_items,
            wishlist_items: data.wishlist_items,
          })
        );
        localStorage.setItem("user_id", data.email);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const storeUserOrderInfo = () => {
    const orderColRef = collection(db, "users", email, "orders");
    getDocs(orderColRef)
      .then((snapshots) => {
        let orderDocs = snapshots.docs;
        let orderList = orderDocs.map((doc) => {
          return doc.data();
        }) as [];
        dispatch(updateUserOrderList(orderList));
      })
      .catch((error) => {
        console.log("error");
      });
  };

  const handleLogIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateInputFields()) {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          setLoading(true);
          storeUserInfoInRedux();
          storeUserOrderInfo();
          setEmail("");
          setPassword("");
          setTimeout(() => {
            navigate("/");
            setLoading(false);
          }, 2000);
        })
        .catch((error) => {
          setError(error.message);
        });
    }
  };

  if (loading) return <Loading />;
  else
    return (
      <LoginWrapper>
        <LeftSection>
          <BrandName >The Gentleman's Attire</BrandName>
          <BrandQuote data-testid = "BrandTitle">
            "People will stare.
            <br />
            Make it worth their while."
          </BrandQuote>
        </LeftSection>
        <RightSection>
          <h1>Welcome back!</h1>
          <h4>Please enter you details</h4>
          {error === "Input Fields can not be empty" && (
            <ErrorText>{error}</ErrorText>
          )}
          {error === "Firebase: Error (auth/wrong-password)." ? (
            <ErrorText>Wrong Password</ErrorText>
          ) : (
            error === "Firebase: Error (auth/user-not-found)." && (
              <ErrorText>**User Not Found</ErrorText>
            )
          )}
          <LoginForm onSubmit={handleLogIn}>
            <label htmlFor="email">Email</label>
            <LoginFormInput
              id="email"
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <LoginFormInput
              className="form-input"
              id="password"
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <LoginButton className="login-btn" type="submit">
              Log In
            </LoginButton>
          </LoginForm>
          <BottomContent>
            Don't have an account?
            <SignupLink to="/signup">
              <span>Sign Up</span>
            </SignupLink>
          </BottomContent>
        </RightSection>
      </LoginWrapper>
    );
}

export default LogIn;
