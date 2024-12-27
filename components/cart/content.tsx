'use client'

import { SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";
import { EmptyCart } from "./empty-cart";
import { CartItemType } from "./hooks/types/state-type";
import { ListItemsCart } from "./list-items";

interface ContentCartProps {
    qntItems: number
    fee: number
    total: number
    items: CartItemType[]
}
export function ContentCart({
    qntItems,
    fee,
    total,
    items
}: ContentCartProps) {
    const isEmpty = qntItems <= 0
    const CartContent = isEmpty ? EmptyCart : ListItemsCart

    return (
        <SheetContent className="w-full max-w-7xl rounded-l-xl flex flex-col">
            <SheetHeader className="pt-0">
                <SheetTitle>
                    Cart({qntItems})
                </SheetTitle>
            </SheetHeader>
            <CartContent items={items} total={total} fee={fee} />
        </SheetContent>
    )
}