import { CartItem } from "../types";
import { sendCartItem } from "../api";

export const sendItemToCart = (cartItem: CartItem) => {
  return async (dispatch: any) => {
    try {
      await sendCartItem(cartItem)
    } catch (error) {
      alert(error)
    }
  }
}