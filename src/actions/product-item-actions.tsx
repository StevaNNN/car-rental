import { getCarById } from "../api";
import { selectCar } from "../Containers/ProductItemPage/ProductItemPageSlice/product-item-slice";

export const selectedCar = (id: any) => async (dispatch: any) => {
  const data = await getCarById(id);
  dispatch(selectCar(data));
}