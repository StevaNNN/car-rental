import instance from "../api";
import { Car } from "../Components/types";
import { getCarData } from "./product-actions";

export const sendCarData = (carData: Car) => {
  return async (dispatch: any) => {
    const sendRequest = async () => {
      await instance.post('/carList.json', carData);
    }
    try {
      await sendRequest();
      dispatch(getCarData());
    } catch (error) {
      alert(error)
    }
  }
}