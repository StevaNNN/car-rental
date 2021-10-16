import instance from "../api";
import { Car } from "../Components/types";
import { getCarData } from "./product-actions";
import { replaceProducts } from "../store/products-store";


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

export const removeCarData = (index: number) => {
  return async (dispatch: any) => {
    const sendRequest = async () => {
      const request = await instance.get('/carList.json');
      return await request.data;
    }
    const sendRequest2 = async (carData: any) => {
      const request = await instance.delete('/carList.json')
    }
    try {
      const carList = await sendRequest();
      let dataArray = [];

      for (const key in carList) {
        dataArray.push({
          id: key,
          name: carList[key].name,
          model: carList[key].model,
          price: carList[key].price,
          img: carList[key].img,
          airCondition: carList[key].airCondition,
          transmission: carList[key].transmission,
          luggage: carList[key].luggage,
          doors: carList[key].doors,
          passengers: carList[key].passengers,
          trailer: carList[key].trailer,
          gps: carList[key].gps,
          childSeat: carList[key].childSeat
        });

      }
      const newDataArray = dataArray.filter((s: any, idx: number) => idx !== index);
      dispatch(replaceProducts(newDataArray));
    } catch (error) {
      alert(error)
    }
  }
}