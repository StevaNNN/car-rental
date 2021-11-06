import { configureStore } from "@reduxjs/toolkit";
import cartStore from "../Containers/CartPage/CartPageSlice/cart-slice";
import productsStore from "../Containers/ProductsPage/ProductsPageSlice/products-slice";
import guestSlice from "../Containers/CartPage/CartPageSlice/guest-slice";
import productItemSlice from "../Containers/ProductItemPage/ProductItemPageSlice/product-item-slice";

const store = configureStore({
  reducer: {
    cart: cartStore.reducer,
    products: productsStore.reducer,
    guest: guestSlice.reducer,
    productItem: productItemSlice.reducer
  }
});

export default store;