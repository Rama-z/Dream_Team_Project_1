import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth";
import productReducer from "./product";
import counterProductReducer from "./counterProduct"
import cartReducer from "./cart";
import categoriesReducer from "./categories";
import profileReducer from "./profile";

export default combineReducers({
  auth: authReducer,
  products: productReducer,
  counter: counterProductReducer,
  cart: cartReducer,
  categories: categoriesReducer,
  profile: profileReducer,
});
