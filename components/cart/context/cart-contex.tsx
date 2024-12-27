"use client";

import { PropsWithChildren, createContext, use, useContext } from "react";
import { useCart } from "../hooks/use-cart";
import { CartItemType } from "../hooks/types/state-type";

interface CartContextProps {
    items: CartItemType[];
    addItem: (item: CartItemType) => void;
    removeItem: (id: string) => void;
    clear: () => void;
}

const CartContext = createContext({} as CartContextProps);

export const CartProvider = ({ children }: PropsWithChildren) => {
    const { addItem, clear, items, removeItem } = useCart();

    return <CartContext.Provider value={{
        addItem,
        clear,
        items,
        removeItem
    }}>
        {children}
    </CartContext.Provider>;
};

export function useCartContext() {
    return useContext(CartContext);
}