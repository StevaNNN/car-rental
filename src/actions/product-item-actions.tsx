import {getCarById} from "../api";
import {test} from "../store/product-item-store";

export const selectedCar = (id: any) => async (dispatch: any) => {
  console.log(id)
  const data = await getCarById(id);
  dispatch(test(data));
}