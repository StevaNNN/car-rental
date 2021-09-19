import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { Car, CartItem } from "../Components/types";
import store from "./index";

const initialState: CartItem = {
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
  }
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<Car>) => {
      state.selectedCar = action.payload
    },
    addUserName: (state, action: PayloadAction<string>) => {
      state.userData.name = action.payload
    },
    addUserLastName: (state, action: PayloadAction<string>) => {
      state.userData.lastName = action.payload
    },
    addUserAge: (state, action: PayloadAction<string>) => {
      state.userData.age = action.payload
    },
    addUserPhone: (state, action: PayloadAction<string>) => {
      state.userData.phone = action.payload
    },
    addUserEmail: (state, action: PayloadAction<string>) => {
      state.userData.email = action.payload
    },
    addUserAddress: (state, action: PayloadAction<string>) => {
      state.userData.address = action.payload
    },
    addUserCity: (state, action: PayloadAction<string>) => {
      state.userData.city = action.payload
    },
    addUserZipCode: (state, action: PayloadAction<number | string>) => {
      state.userData.zipCode = action.payload
    },
    onFormSubmit: (state, action: PayloadAction<{}>) => {
      console.log(action.payload)
    }
  }
});

export const actions = cartSlice.actions;
export type cartState = ReturnType<typeof store.getState>
export default cartSlice;