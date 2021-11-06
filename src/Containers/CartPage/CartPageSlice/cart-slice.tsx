import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CarAdditional, CartItem } from "../../../types";
import store from "../../../store";
import { carInitialState } from "../../../utils";

const initialCartCarAdditionalState : CarAdditional = {
  pickUpAddress: '',
  leaveAddress: '',
  pickUpDate: '',
  leaveDate: '',
  extraDriver: false
}
const initialState: CartItem[] = [{
  selectedCar: {
    ...carInitialState,
    ...initialCartCarAdditionalState
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
}];

const nameSpace = 'cart';

const cartSlice = createSlice({
  name: `${nameSpace}`,
  initialState: initialState,
  reducers: {
    formSubmit: (state, action: PayloadAction<CartItem>) => {
      state.push(action.payload)
    }
  }
});

export const { formSubmit } = cartSlice.actions;
export type cartState = ReturnType<typeof store.getState>
export default cartSlice;