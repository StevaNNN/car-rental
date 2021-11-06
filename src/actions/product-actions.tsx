import { getCars } from "../api";
import { replaceProducts } from "../Containers/ProductsPage/ProductsPageSlice/products-slice";
import { firebaseObjectsToArray } from "../utils";
/*
* Get car list data and replace current product slice state with the one derived from request
* */
export const getCarData = () => async (dispatch: any) => {
  const carList = await getCars();
  const cars = firebaseObjectsToArray(carList);
  dispatch(replaceProducts(cars));
}
