import { deleteCar, sendCar, updateCar } from "../../../api";
import { Car } from "../../../types";
import { getCarData } from "../../ProductsPage/ProductsPageActions/products-actions";

export const sendCarData = (carData: Car) => async (dispatch: any) => {
  // sending new car to database
  await sendCar(carData);
  // get new car data and updating redux store
  dispatch(getCarData());
}

export const removeCarData = (id: any) => async (dispatch: any) => {
  // deleting car from database
  await deleteCar(id);
  // get new car data and updating redux store
  dispatch(getCarData());
}

export const editCarData = (id: any, newCarData: Car) => async (dispatch: any) => {
  // update the car in database
  await updateCar(id, { ...newCarData, id });
  // get new car data and updating redux store
  dispatch(getCarData());
}