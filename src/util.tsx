import { Car } from "./Components/types";

/*
* Utility function which helps not to render initial state from store to the DOM
* */
export const truthyCar = (car: Car) => {
  return !!car.name || !!car.model || !!car.price;
}

export const GUEST_COOKIE_NAME = "guestCookie";