import {Car, ICar} from "./Components/types";

/*
* Utility function which helps not to render initial state from store to the DOM
* */
export const truthyCar = (car: Car) => {
  return !!car.name || !!car.model || !!car.price;
}

export const GUEST_COOKIE_NAME = "guestCookie";

export const validateTextField = (value: any) => value.trim().length > 0;
export const validateEmailField = (value: any) => validateTextField(value) && value.includes('@');
export const validateForm = (car: ICar) => {
  let formIsValid = false;
  const entries = Object.entries(car);
  const values: string[] = [];

  entries.forEach((element) => {
    if(typeof element[1] === 'string') {
      values.push(element[1]);
    }
  });

  if(values.every(validateTextField)) {
    formIsValid = true;
  }

  return formIsValid;
}