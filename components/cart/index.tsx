'use client'

import { TriggerCart } from "./trigger";
import { ContentCart } from "./content";
import { Sheet } from "../ui/sheet";
import { useCartContext } from "./context/cart-contex";


interface CartProps {

}
export function Cart(props: CartProps) {
    const { items } = useCartContext()

    const qnt = items.length
    const cartTotal = items.reduce((total, { product }) => {
        return total + product.price
    }, 0)
    const fee = 1
    return (
        <Sheet>
            <TriggerCart
                qntItems={qnt}
            />
            <ContentCart
                items={items}
                total={cartTotal}
                fee={fee}
                qntItems={qnt}
            />
        </Sheet>
    )
}