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
          price: carList[key].price
        })
      }
      dispatch(replaceProducts(dataArray))
    } catch (error) {
      alert(error)
    }
  }
}

// export const