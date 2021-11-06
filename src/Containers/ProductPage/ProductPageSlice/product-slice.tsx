import { createSlice } from "@reduxjs/toolkit";
import { carInitialState } from "../../../utils";
import { Car } from "../../../types";
import store from "../../../store";

const initialState: Car = {
  ...carInitialState
}

const PREFIX = 'product';

const productSlice = createSlice({
  name: PREFIX,
  initialState,
  reducers: {
    selectCar: (state, action) => {
      return action.payload
    }
  }
});

export const { selectCar } = productSlice.actions;
export type productState = ReturnType<typeof store.getState>
export default productSlice;