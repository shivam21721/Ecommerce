import { ProductType } from "../../interfaces/interface";

interface actionType {
  type: string;
  payload: ProductType[]; 
}
let initialState: [] = [];

const productReducer = (state = initialState, action: actionType) => {
  switch (action.type) {
    case "INITIAL_VALUE":
      return [...action.payload];
    default:
      return state;
  }
};

export default productReducer;
