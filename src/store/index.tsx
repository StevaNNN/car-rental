import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-store";
import productsSlice from "./products-store";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    products: productsSlice.reducer
  }
});

export default store;