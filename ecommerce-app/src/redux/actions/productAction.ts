import { ProductType } from "../../interfaces/interface";

export const setProductData = (data: ProductType[]) => {
  return {
    type: "INITIAL_VALUE",
    payload: data,
  };
};
