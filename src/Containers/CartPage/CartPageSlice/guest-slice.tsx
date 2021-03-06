import { createSlice } from "@reduxjs/toolkit";
import { CarAdditional } from "../../../types";
import store from "../../../store";
import { carInitialState } from "../../../utils";

export const initialGuestCarAdditionalState: CarAdditional = {
  pickUpAddress: '',
  leaveAddress: '',
  pickUpDate: '',
  leaveDate: '',
}

const initialState = {
  ...initialGuestCarAdditionalState,
  ...carInitialState
}

const nameSpace = 'guestStore';

const guestSlice = createSlice({
  name: `${nameSpace}`,
  initialState: initialState,
  reducers: {
    updateCookie: (state, action: any) => {
      return action.payload
    }
  }
});

export const { updateCookie } = guestSlice.actions;
export type guestState = ReturnType<typeof store.getState>
export default guestSlice;