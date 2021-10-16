import { deleteCar, getCars, sendCar } from "../api";
import { Car } from "../Components/types";
import { getCarData } from "./product-actions";
import { replaceProducts } from "../store/products-store";
import { firebaseObjectsToArray } from "../util";

export const sendCarData = (carData: Car) => {
  return async (dispatch: any) => {
    try {
      await sendCar(carData);
      dispatch(getCarData());
    } catch (error) {
      alert(error)
    }
  }
}

export const removeCarData = (index: number) => {
  return async (dispatch: any) => {
    try {
      // storing items from firebase
      const carList = await getCars();
      // parsing data derived from firebase
      const cars = firebaseObjectsToArray(carList)
      // preparing new array for products store without deleted item
      const newCars = cars.filter((car: Car, idx: number) => idx !== index);
      // deleting item from database
      cars.map((car: Car, idx: number) => idx === index ? deleteCar(car) : null);
      // replacing products store
      dispatch(replaceProducts(newCars));
    } catch (error) {
      alert(error)
    }
  }
}

export const editCarData = (index: number) => {
  return async (dispatch: any) => {

  }
}