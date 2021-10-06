import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Car } from "../Components/types";
import store from "./index";

const initialState: Car = {
  name: '',
  model: '',
  price: '',
  img: '',
  airCondition: false,
  transmission: '',
  luggage: '',
  doors: null,
  passengers: null,
  trailer: false,
  gps: false,
  childSeat: false,
  extraDriver: false
};

const nameSpace = 'guestStore';

const guestSlice = createSlice({
  name: `${nameSpace}`,
  initialState: initialState,
  reducers: {
    updateCookie: (state, action: PayloadAction<Car>) => {
      return action.payload
    }
  }
});

export const { updateCookie } = guestSlice.actions;
export type guestState = ReturnType<typeof store.getState>
export default guestSlice;