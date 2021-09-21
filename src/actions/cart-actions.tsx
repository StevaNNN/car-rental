import { CartItem } from "../Components/types";
import instance from "../api";

export const sendItemToCart = (cartItem: CartItem) => {
  return async (dispatch: any) => {
    const sendRequest = async () => {
      const request = await instance.post('/cartList.json', cartItem);
      const data = await request.data
      return data
    }

    try {
      await sendRequest()
    } catch (error) {
      alert(error)
    }
  }
}