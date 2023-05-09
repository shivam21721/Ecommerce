import { useDispatch, useSelector } from "react-redux";
import { updateUserInfo } from "../../redux/actions/userAction";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase/firebase";
import { doc, setDoc, updateDoc } from "firebase/firestore";
import {
  StateType,
  UserInfoType,
  ProductType,
} from "../../interfaces/interface";
import {
  OrderSummaryWrapper,
  Title,
  HorizontalRow,
  OrderSummaryItems,
  PlaceOrderButton,
  PlaceOrderSection,
} from "./OrderSummary.styles";

function OrderSummary() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userInfo = useSelector(
    (state: StateType) => state.userReducer
  ) as UserInfoType;

  const totalQuantity = userInfo.cart_items.reduce(
    (quantity: number, item: ProductType) => {
      return quantity + item.quantity;
    },
    0
  );

  const totalMrp = userInfo.cart_items.reduce(
    (price: number, item: ProductType) => {
      return price + Number(item.max_price) * item.quantity;
    },
    0
  );

  const totalDiscount = userInfo.cart_items.reduce(
    (price: number, item: ProductType) => {
      return price + Number(item.discount_price) * item.quantity;
    },
    0
  );

  const handlePlaceOrder = async () => {
    const orderId = Date.now().toString();
    const docRef = doc(db, "users", userInfo.email, "orders", orderId);
    await setDoc(docRef, {
      orders_list: userInfo.cart_items,
      total_amount: totalDiscount,
      order_id: orderId,
    });

    await updateDoc(doc(db, "users", userInfo.email), {
      cart_items: [],
    });

    dispatch(
      updateUserInfo({
        ...userInfo,
        order_history: [
          ...userInfo.order_history,
          {
            orders_list: userInfo.cart_items,
            total_amount: totalDiscount,
            order_id: orderId,
          },
        ],
        cart_items: [],
      })
    );
    navigate("/order-placed");
  };

  return (
    <OrderSummaryWrapper>
      <Title>Order Summary</Title>
      <HorizontalRow />
      <h3>PRICE DETAILS({totalQuantity})</h3>
      <OrderSummaryItems>
        <span>Total MRP</span>
        <span>Rs.{totalMrp}</span>
      </OrderSummaryItems>

      <OrderSummaryItems>
        <span>Discount on MRP</span>
        <span>-Rs.{totalMrp - totalDiscount}</span>
      </OrderSummaryItems>

      <OrderSummaryItems>
        <span>Convenience Fee</span>
        <span>FREE</span>
      </OrderSummaryItems>

      <OrderSummaryItems>
        <h3>Total Amount</h3>
        <span>Rs.{totalDiscount}</span>
      </OrderSummaryItems>

      <PlaceOrderSection>
        <PlaceOrderButton onClick={handlePlaceOrder}>
          Place Order
        </PlaceOrderButton>
      </PlaceOrderSection>
    </OrderSummaryWrapper>
  );
}

export default OrderSummary;
