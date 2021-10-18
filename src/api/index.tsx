import axios from "axios";
import { Car, CartItem } from "../Components/types";

const instance = axios.create({
  baseURL : `${process.env.REACT_APP_BASE_URL}`
});

export default instance;

export const sendCar = async (carData: Car) => await instance.post('/carList.json', carData);
export const deleteCar = async (carData: Car) => await instance.delete(`/carList/${carData.id}.json`);
export const updateCar = async (index: any, newCarData: Car) => await instance.put(`/carList/${index}.json`, newCarData);
export const getCarById = async (index: any) => {
  const request = await instance.get(`/carList/${index}.json`);
  return await request.data;
}
export const sendCartItem = async (cartItem: CartItem) => {
  const request = await instance.post('/cartList.json', cartItem);
  return await request.data;
}

export const getCars = async () => {
  const request = await instance.get('/carList.json');
  return await request.data;
}
