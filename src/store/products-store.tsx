import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Car } from "../Components/types";
import store from "./index";
import { carInitialState } from "../util";

const initialState: Car[] = [{
  ...carInitialState
}];

const nameSpace = 'products';

const productsSlice = createSlice({
  name: `${nameSpace}`,
  initialState: initialState,
  reducers: {
    replaceProducts: (state, action: PayloadAction<Car[]>) => {
      return action.payload
    }
  }
});

export const { replaceProducts } = productsSlice.actions;
export type productsState = ReturnType<typeof store.getState>
export default productsSlice;