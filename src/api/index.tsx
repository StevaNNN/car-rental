import axios from "axios";
import { Car, CartItem } from "../types";

const instance = axios.create({
  baseURL : `${process.env.REACT_APP_BASE_URL}`
});

export default instance;

export const sendCar = async (carData: Car) => await instance.post('/carList.json', carData);
export const deleteCar = async (id: any) => await instance.delete(`/carList/${id}.json`);
export const updateCar = async (id: any, newCarData: Car) => await instance.put(`/carList/${id}.json`, newCarData);

export const sendSelectedCar = async(data: Car) => await instance.put('/selectedCar.json', data);
export const getSelectedCar = async() => {
  const request = await instance.get('/selectedCar.json');
  return await request.data;
}
export const deleteSelectedCar = async () => {
  const request = await instance.delete('/selectedCar.json');
}

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
