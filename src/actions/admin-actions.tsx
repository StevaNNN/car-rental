import instance from "../api";
import { Car } from "../Components/types";
import { getCarData } from "./product-actions";
import { replaceProducts } from "../store/products-store";


export const sendCarData = (carData: Car) => {
  return async (dispatch: any) => {
    const sendCar = async () => {
      await instance.post('/carList.json', carData);
    }
    try {
      await sendCar();
      dispatch(getCarData());
    } catch (error) {
      alert(error)
    }
  }
}

export const removeCarData = (index: number) => {
  return async (dispatch: any) => {
    const getCars = async () => {
      const request = await instance.get('/carList.json');
      return await request.data;
    }
    const deleteCar = async (carData: any) => {
      const req = await instance.delete('/carList.json', {data: carData.id});
      return await  req.data;
    }
    try {
      // storing items from firebase
      const carList = await getCars();
      // parsing data derived from firebase
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
      // preparing new array for products store without deleted item
      const newDataArray = dataArray.filter((s: any, idx: number) => idx !== index);
      // deleting item from database
      dataArray.map((d:any, idx: number) => idx === index ? deleteCar(d): null);
      // replacing products store
      dispatch(replaceProducts(newDataArray));
    } catch (error) {
      alert(error)
    }
  }
}