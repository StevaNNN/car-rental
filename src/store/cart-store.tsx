import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { CartItem } from "../Components/types";
import store from "./index";

const initialState: CartItem[] = [{
    selectedCar: {
      name: '',
      model: '',
      price: '',
      img: '',
      airCondition: false,
      transmission: false,
      luggage: false,
      doors: null,
      passengers: null,
      pickUpAddress: '',
      leaveAddress: '',
      pickUpDate: '',
      leaveDate: '',
      trailer: false,
      gps: false,
      childSeat: false,
      extraDriver: false
    },
    userData: {
      name: '',
      lastName: '',
      age: '',
      phone: '',
      email: '',
      address: '',
      city: '',
      zipCode: ''
    },
    totalCost: ''
  }
];

const nameSpace = 'cart';

const cartSlice = createSlice({
  name: `${nameSpace}`,
  initialState: initialState,
  reducers: {
    addCarToCart: (state, action: PayloadAction<any>) => {

    },
    formSubmit: (state, action: PayloadAction<CartItem>) => {
      state.push(action.payload)
    }
  }
});

export const { formSubmit } = cartSlice.actions;
export type cartState = ReturnType<typeof store.getState>
export default cartSlice;