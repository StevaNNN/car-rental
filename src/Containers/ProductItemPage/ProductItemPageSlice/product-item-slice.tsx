import { createSlice } from "@reduxjs/toolkit";
import { carInitialState } from "../../../utils";
import { Car } from "../../../types";
import store from "../../../store";

const initialState: Car = {
  ...carInitialState
}
const productItemSlice = createSlice({
  name: 'productItem',
  initialState,
  reducers: {
    selectCar: (state, action) => {
      return action.payload
    }
  }
});

export const { selectCar } = productItemSlice.actions;
export type productItemState = ReturnType<typeof store.getState>
export default productItemSlice;