import { configureStore } from "@reduxjs/toolkit";
import cartStore from "./cart-store";
import productsStore from "./products-store";
import guestSlice from "./guest-store";
import productItemSlice from "./product-item-store";

const store = configureStore({
  reducer: {
    cart: cartStore.reducer,
    products: productsStore.reducer,
    guest: guestSlice.reducer,
    productItem: productItemSlice.reducer
  }
});

export default store;