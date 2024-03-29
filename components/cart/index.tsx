'use client'

import { TriggerCart } from "./trigger";
import { ContentCart } from "./content";
import { Sheet } from "../ui/sheet";


interface CartProps {

}
export function Cart(props: CartProps) {
    const qnt = 1
    const fee = 1
    return (
        <Sheet>
            <TriggerCart
                qntItems={qnt}
            />
            <ContentCart
                fee={fee}
                qntItems={qnt}
            />
        </Sheet>
    )
}