import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Car } from "../Components/types";
import store from "./index";

const initialState: Car = {
  name: '',
  model: '',
  price: '',
  airCondition: false,
  transmission: false,
  luggage: false,
  doors: null,
  passengers: null,
  loading: null
};

const nameSpace = 'guestStore';

const guestSlice = createSlice({
  name: `${nameSpace}`,
  initialState: initialState,
  reducers: {
    updateCookie: (state, action:PayloadAction<Car>) => {
      return action.payload
    }
  }
});

export const { updateCookie } = guestSlice.actions;
export type guestState = ReturnType<typeof store.getState>
export default guestSlice;