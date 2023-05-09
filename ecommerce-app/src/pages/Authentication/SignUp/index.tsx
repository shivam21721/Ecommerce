import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase/firebase";
import React from "react";
import { useState } from "react";
import { db } from "../../../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateUserInfo } from "../../../redux/actions/userAction";
import { doc, setDoc } from "firebase/firestore";
import Loading from "../../../components/Loading/Loading";
import {
  SignUpWrapper,
  LeftSection,
  RightSection,
  BrandName,
  BrandQuote,
  SignupForm,
  SignupFormInput,
  SignUpButton,
  BottomContent,
  LoginLink,
  ErrorText,
} from "./SignUp.styles";

function SignUp() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validateInputFields = () => {
    if (name === "" || email === "" || password === "") {
      setError("Input Fields can not be empty");
      return false;
    }
    return true;
  };

  const setUserDataInFirebase = async () => {
    await setDoc(doc(db, "users", email), {
      name: name,
      email: email,
      password: password,
      cart_items: [],
      wishlist_items: [],
    });
  };

  const setUserInfoInRedux = () => {
    dispatch(
      updateUserInfo({
        userStatus: true,
        name: name,
        email: email,
        order_history: [],
        cart_items: [],
        wishlist_items: [],
      })
    );
  };

  const createOrderCollectionInFirebase = async () => {
    const docRef = doc(db, "users", email, "orders", "temp");
    await setDoc(docRef, {
      orders_list: [],
      total_amount: 0,
      order_id: "0",
    });
  };

  const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateInputFields()) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(async () => {
          setLoading(true);
          setUserDataInFirebase();
          setUserInfoInRedux();
          createOrderCollectionInFirebase();
          localStorage.setItem("user_id", email);
          setName("");
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

  return (
    <SignUpWrapper>
      <LeftSection>
        <h1>Create New Account</h1>
        <h4>Please enter you details</h4>

        {error === "Firebase: Error (auth/email-already-in-use)." && (
          <ErrorText>**User Already Exist</ErrorText>
        )}
        {error ===
          "Firebase: Password should be at least 6 characters (auth/weak-password)." && (
          <ErrorText>**Password should be atleast 6 characters</ErrorText>
        )}
        {error === "Input Fields can not be empty" && (
          <ErrorText>{error}</ErrorText>
        )}

        <SignupForm onSubmit={handleSignUp}>
          <label htmlFor="name">Name</label>
          <SignupFormInput
            id="name"
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="email">Email</label>
          <SignupFormInput
            id="email"
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <SignupFormInput
            id="password"
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <SignUpButton type="submit">Sign Up</SignUpButton>
        </SignupForm>
        <BottomContent>
          Already have an account?
          <LoginLink to="/login">Log In</LoginLink>
        </BottomContent>
      </LeftSection>

      <RightSection>
        <BrandName>The Gentleman's Attire</BrandName>
        <BrandQuote>
          "People will stare.
          <br />
          Make it worth their while."
        </BrandQuote>
      </RightSection>
    </SignUpWrapper>
  );
}

export default SignUp;
