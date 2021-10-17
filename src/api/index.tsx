import axios from "axios";
import { Car, CartItem } from "../Components/types";

const instance = axios.create({
  baseURL : `${process.env.REACT_APP_BASE_URL}`
});

export default instance;

export const sendCar = async (carData: Car) => await instance.post('/carList.json', carData);
export const updateCar = async (index: number, newCarData: Car) => await instance.put('/carList.json', newCarData);
export const sendCartItem = async (cartItem: CartItem) => {
  const request = await instance.post('/cartList.json', cartItem);
  return await request.data
}
export const getCars = async () => {
  const request = await instance.get('/carList.json');
  return await request.data;
}
export const deleteCar = async (carData: Car) => {
  const req = await instance.delete('/carList.json', { data: carData.id });
  return await req.data;
}
