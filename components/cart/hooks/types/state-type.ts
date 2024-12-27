import { Product } from "@/payload-types";

export type CartItemType = {
  product: Product;
};

export type CartState = {
  items: CartItemType[];
};
