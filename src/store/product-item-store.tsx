import {createSlice} from "@reduxjs/toolkit";
import {carInitialState} from "../util";
import {Car} from "../Components/types";
import store from "./index";

const initialState: Car = {
  ...carInitialState
}
const productItemSlice = createSlice({
  name: 'productItem',
  initialState,
  reducers: {
    test: (state, action) => {
      return action.payload
    }
  }
});

export const {test} = productItemSlice.actions;
export type productItemState = ReturnType<typeof store.getState>
export default productItemSlice;