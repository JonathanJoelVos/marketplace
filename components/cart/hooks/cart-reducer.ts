import { ActionsCartType } from "./types/action-type";
import { CartState } from "./types/state-type";

export function cartReducer(state: CartState, action: ActionsCartType) {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        items: [...state.items, { product: action.payload.product }],
      };
    case "REMOVE_FROM_CART":
      return {
        items: state.items.filter(
          (item) => item.product.id !== action.payload.id
        ),
      };
    case "CLEAR_CART":
      return {
        items: [],
      };
    case "SET_CART":
      return {
        items: action.payload.items,
      };
    default:
      return state;
  }
}
