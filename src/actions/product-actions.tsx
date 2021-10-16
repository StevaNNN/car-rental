import instance from "../api";
import { replaceProducts } from "../store/products-store";
/*
* Get car list data and replace current product slice state with the one derived from request
* */
export const getCarData = () => {
  return async (dispatch: any) => {
    const sendRequest = async () => {
      const request = await instance.get('/carList.json');
      return await request.data;
    }
    try {
      const carList = await sendRequest();
      let dataArray = [];

      for (const key in carList) {
        dataArray.push({
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
        })
      }
      dispatch(replaceProducts(dataArray));
    } catch (error) {
      alert(error)
    }
  }
}