import React, { useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { db } from "../../firebase/firebase";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { setProductData } from "../../redux/actions/productAction";
import { ToastContainer } from "react-toastify";
import { GlobalStyle } from "../../GlobalStyle";
import { UserInfoType } from "../../interfaces/interface";
import {
  updateUserInfo,
  updateUserOrderList,
} from "../../redux/actions/userAction";
//import Cart from "../../pages/Cart";
import Home from "../../pages/Home";
import LogIn from "../../pages/Authentication/LogIn";
import SignUp from "../../pages/Authentication/SignUp";
//import Wishlist from "../../pages/Wishlist";
import AllProducts from ".././AllProducts/AllProducts";
//import OrderHistory from "../../pages/OrderHistory/index";
import ProductDetails from ".././ProductDetails/ProductDetails";
//import Search from ".././Search/Search";
import Footer from ".././Footer/Footer";
import "react-toastify/dist/ReactToastify.css";
import wait from "../../utils/Wait";
import ProductContainer from ".././ProductContainer/ProductContainer";
import NavigationBar from ".././NavigationBar/NavigationBar";
import OrderPlaced from "../../pages/OrderPlaced/OrderPlaced";
import Error from "../Error/Error";
import ScrollToTop from "../../utils/ScrollToTop";
import Loading from "../Loading/Loading";
const Cart = lazy(() => wait(1000).then(() => import("../../pages/Cart")));
const Wishlist = lazy(() => wait(1000).then(() => import("../../pages/Wishlist")));
const OrderHistory = lazy(() => wait(1000).then(() => import("../../pages/OrderHistory")));
const Search = lazy(() => wait(1000).then(() => import(".././Search/Search")));

function Main() {
  const dispatch = useDispatch();

  const storeProductsDataInRedux = () => {
    const colRef = collection(db, "products");
    getDocs(colRef)
      .then((snapshots) => {
        let productDocs = snapshots.docs;
        let productList = productDocs.map((doc) => {
          return doc.data();
        }) as [];
        dispatch(setProductData(productList));
      })
      .catch((error) => {
        console.log("error");
      });
  };

  const storeUserInfo = (user_id: string) => {
    const userDocRef = doc(db, "users", user_id);
    getDoc(userDocRef).then((userInfo) => {
      let data = userInfo.data() as UserInfoType;
      dispatch(
        updateUserInfo({
          userStatus: true,
          name: data.name,
          email: user_id,
          order_history: [],
          cart_items: data.cart_items,
          wishlist_items: data.wishlist_items,
        })
      );
    });
  };

  const storeUserOrderList = (user_id: string) => {
    const orderColRef = collection(db, "users", user_id, "orders");
    getDocs(orderColRef)
      .then((snapshots) => {
        let orderDocs = snapshots.docs;
        let orderList = orderDocs.map((doc) => {
          return doc.data();
        }) as [];
        if (orderList !== undefined) dispatch(updateUserOrderList(orderList));
      })
      .catch((error) => {
        console.log("error");
      });
  };

  const updateUserInfoInReduxOnRefresh = () => {
    const user_id = localStorage.getItem("user_id");
    if (user_id != null) {
      storeUserInfo(user_id);
      storeUserOrderList(user_id);
    }
  };

  useEffect(() => {
    storeProductsDataInRedux();
    updateUserInfoInReduxOnRefresh();
  }, []);

  return (
    <div className="main-component">
      <BrowserRouter>
        <ScrollToTop />
        <GlobalStyle />
        <NavigationBar />
        <Suspense fallback={<Loading/>}>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route index element={<AllProducts />} />
              <Route path="/shop" element={<Navigate replace to="/" />} />
              <Route
                path="/shop/:categoryName"
                element={<ProductContainer />}
              />
            </Route>
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/product/:product_id" element={<ProductDetails />} />
            <Route path="/search" element={<Search />} />
            <Route path="/order-placed" element={<OrderPlaced />} />
            <Route path="/orders" element={<OrderHistory />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
      <ToastContainer autoClose={500} />
    </div>
  );
}

export default Main;
