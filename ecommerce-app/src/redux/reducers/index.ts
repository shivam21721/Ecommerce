import userReducer from "./userReducer";
import { combineReducers } from "redux";
import productReducer from "./productReducer";
import filterReducer from "./filterReducer";

const rootReducer = combineReducers({ 
  userReducer,
  productReducer,
  filterReducer,
});

export default rootReducer;
