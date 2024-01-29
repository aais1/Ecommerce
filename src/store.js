import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./feature/cart/cartSlice";
import productReducer from "./feature/product/productSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    product:productReducer
  },
});

export default store;
