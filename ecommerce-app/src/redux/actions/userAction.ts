import { ProductType, UserInfoType } from "../../interfaces/interface";

export const updateUserInfo = (data: UserInfoType) => {
  return {
    type: "UPDATE_USER_INFO",
    payload: data,
  };
};

export const updateUserOrderList = (data: ProductType[]) => {
  return {
    type: "UPDATE_USER_ORDER_LIST",
    payload: data,
  };
};
