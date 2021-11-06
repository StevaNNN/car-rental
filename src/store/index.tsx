import { configureStore } from "@reduxjs/toolkit";
import cartStore from "../Containers/CartPage/CartPageSlice/cart-slice";
import productsStore from "../Containers/ProductsPage/ProductsPageSlice/products-slice";
import guestSlice from "../Containers/CartPage/CartPageSlice/guest-slice";
import productSlice from "../Containers/ProductPage/ProductPageSlice/product-slice";

const store = configureStore({
  reducer: {
    cart: cartStore.reducer,
    products: productsStore.reducer,
    guest: guestSlice.reducer,
    product: productSlice.reducer
  }
});

export default store;