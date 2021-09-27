import { Car } from "./Components/types";

/*
* Utility function which helps not to render initial state from store to the DOM
* */
export const truthyCar = (car: Car) => {
  return !!car.name || !!car.model || !!car.price;
}

export const GUEST_COOKIE_NAME = "guestCookie";

export const validateTextField = (value: any) => value.trim() !== '';
export const validateEmailField = (value: any) => validateTextField(value) && value.includes('@');