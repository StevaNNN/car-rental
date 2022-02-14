import {
  deleteSelectedCar,
  getCarById,
  getSelectedCar,
  sendSelectedCar
} from "../../../api";
import { selectCar } from "../ProductPageSlice/product-slice";

export const selectedCar = (id: any) => async (dispatch: any) => {
  const data = await getCarById(id);
  dispatch(selectCar(data));
  await sendSelectedCar(data);
}

export const updateSelectedCarOnRefresh = () => async (dispatch: any) => {
  const data = await getSelectedCar();
  dispatch(selectCar(data));
}

export const deleteSelectedCarAction = () => async (dispatch: any) => {
  await deleteSelectedCar();
}
