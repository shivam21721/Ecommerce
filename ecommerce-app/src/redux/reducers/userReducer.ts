import { UserInfoType } from "../../interfaces/interface";
interface actionType {
  type: string;
  payload: UserInfoType;
}
const initialUserInfo = { 
  userStatus: false,
  name: "",
  email: "",
  order_history: [],
  cart_items: [],
  wishlist_items: [],
};

const userReducer = (state = initialUserInfo, action: actionType) => {
  switch (action.type) {
    case "UPDATE_USER_INFO": {
      return { ...action.payload };
    }

    case "UPDATE_USER_ORDER_LIST": {
      return { ...state, order_history: action.payload };
    }

    default:
      return state;
  }
};

export default userReducer;
