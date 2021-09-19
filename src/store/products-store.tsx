import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { Car } from "../Components/types";
import store from "./index";

const initialState: Car[] = [{
  name: '',
  model: '',
  price: '',
  airCondition: false,
  transmission: false,
  luggage: false,
  doors: null,
  passengers: null
}];


const productsSlice = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {
    addProduct: (state, action:PayloadAction<Car>) => {
      return [...state, action.payload];
    },
    removeProduct: (state, action:PayloadAction<any>) => {
      return state.splice(action.payload, 1);
    }
  }
});

export const actions = productsSlice.actions;
export type productsStore = ReturnType<typeof store.getState>
export default productsSlice;