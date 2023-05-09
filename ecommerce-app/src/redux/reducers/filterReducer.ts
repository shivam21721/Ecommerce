import { FilterType } from "../../interfaces/interface";

interface actionType {
  type: string;
  payload: FilterType; 
}

let initialState: FilterType = {
  maxPrice: 10000,
  minPrice: 1000,
  minRating: 1,
  maxRating: 5,
};

const filterReducer = (state = initialState, action: actionType) => {
  switch (action.type) {
    case "UPDATE_FILTER":
      return action.payload;
    default:
      return state;
  }
};

export default filterReducer;
