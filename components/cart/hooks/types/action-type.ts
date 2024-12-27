import { Product } from "@/payload-types";
import { CartItemType } from "./state-type";

export type ActionsCartType =
  | AddToCartAction
  | RemoveFromCartAction
  | ClearCart
  | SetCart;

type AddToCartAction = {
  type: "ADD_TO_CART";
  payload: {
    product: Product;
  };
};

type RemoveFromCartAction = {
  type: "REMOVE_FROM_CART";
  payload: {
    id: string;
  };
};

type ClearCart = {
  type: "CLEAR_CART";
};
type SetCart = {
  type: "SET_CART";
  payload: {
    items: CartItemType[];
  };
};
