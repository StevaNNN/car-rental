import {createSlice} from "@reduxjs/toolkit";
import { CartItem } from "../Components/types";
import store from "./index";

const initialState: CartItem = {
  carModel: '',
  pickUpAddress: '',
  leaveAddress: '',
  pickUpDate: '',
  leaveDate: '',
  trailer: false,
  gps: false,
  childSeat: false,
  extraDriver: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addItemToCart(state, action) {

    },
    removeItemFromCart(state, action) {

    },
    submitForm(state, action) {

    }
  }
});

export const actions = cartSlice.actions;
export type cartState = ReturnType<typeof store.getState>
export default cartSlice;