import { Car } from "./Components/types";

export const GUEST_COOKIE_NAME = "guestCookie";
export const validateTextField = (value: any) => value.trim().length > 0;
export const validateEmailField = (value: any) => validateTextField(value) && value.includes('@');
export const validateForm = (car: Car) => {
  let formIsValid = false;
  const entries = Object.entries(car);
  const values: string[] = [];

  entries.forEach((element) => {
    if (typeof element[1] === 'string') {
      values.push(element[1]);
    }
  });

  if (values.every(validateTextField)) {
    formIsValid = true;
  }

  return formIsValid;
}
export const carInitialState: Car = {
  name: '',
  model: '',
  price: '',
  img: '',
  airCondition: false,
  transmission: '',
  luggage: '',
  doors: '',
  passengers: '',
  trailer: false,
  gps: false,
  childSeat: false,
}

export function removeItemOnce(arr: any, value: number) {
  var index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}

export const firebaseObjectsToArray = (dataFromFirebase: any) => {
  let cars: Car[] = [];

  for (const data in dataFromFirebase) {
    cars.push({
      id: data,
      name: dataFromFirebase[data].name,
      model: dataFromFirebase[data].model,
      price: dataFromFirebase[data].price,
      img: dataFromFirebase[data].img,
      airCondition: dataFromFirebase[data].airCondition,
      transmission: dataFromFirebase[data].transmission,
      luggage: dataFromFirebase[data].luggage,
      doors: dataFromFirebase[data].doors,
      passengers: dataFromFirebase[data].passengers,
      trailer: dataFromFirebase[data].trailer,
      gps: dataFromFirebase[data].gps,
      childSeat: dataFromFirebase[data].childSeat
    })
  }

  return cars;
}