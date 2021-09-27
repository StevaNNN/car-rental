import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Car } from "../Components/types";
import store from "./index";

const initialState: Car[] = [{
  name: '',
  model: '',
  price: '',
  airCondition: false,
  transmission: '',
  luggage: '',
  doors: null,
  passengers: null,
  trailer: false,
  gps: false,
  childSeat: false,
  extraDriver: false
}];

const nameSpace = 'products';

const productsSlice = createSlice({
  name: `${nameSpace}`,
  initialState: initialState,
  reducers: {
    replaceProducts: (state, action:PayloadAction<Car[]>) => {
      console.log(action.payload)
      return action.payload
    }
  }
});

export const { replaceProducts } = productsSlice.actions;
export type productsState = ReturnType<typeof store.getState>
export default productsSlice;