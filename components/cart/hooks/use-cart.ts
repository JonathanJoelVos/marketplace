import { useEffect, useReducer } from "react";
import { cartReducer } from "./cart-reducer";
import { CartItemType } from "./types/state-type";
import { useLocalStorage } from "@/hooks/use-local-storage";

export function useCart() {
  const [items, dispatch] = useReducer(cartReducer, { items: [] });
  const { get, set, remove } = useLocalStorage();

  useEffect(() => {
    const cart = get("cart");
    if (cart) {
      dispatch({
        type: "SET_CART",
        payload: {
          items: JSON.parse(cart),
        },
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function addItem({ product }: CartItemType) {
    const random = new Date().getTime().toString();
    const newProduct = {
      ...product,
      id: product.id + random,
    };
    set("cart", [...items.items, { product: newProduct }]);
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        product: newProduct,
      },
    });
  }

  function removeItem(id: string) {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        id,
      },
    });
    const newItems = items.items.filter((item) => item.product.id !== id);
    set("cart", newItems);
  }

  function clear() {
    remove("cart");
    dispatch({
      type: "CLEAR_CART",
    });
  }

  return {
    items: items.items,
    addItem,
    removeItem,
    clear,
  };
}
