import { formatPrice } from "@/lib/utils";
import { Separator } from "../ui/separator";
import { SheetFooter, SheetTrigger } from "../ui/sheet";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { CartItemType } from "./hooks/types/state-type";
import { CartItem } from "./cart-item";
import { ScrollArea } from "../ui/scroll-area";

interface ListItemsCartProps {
    fee: number
    total: number
    items: CartItemType[]
}
export function ListItemsCart({
    fee,
    total,
    items
}: ListItemsCartProps) {
    return (
        <>
            <div className="space-y-6 text-sm">
                <ScrollArea className="h-96">
                    <ul className="flex flex-col gap-5">
                        {items.map((item, i) => (
                            <CartItem item={item} key={item.product.id + i} />
                        ))}

                    </ul>
                </ScrollArea>
                <Separator />
                <div className="space-y-3">
                    <div className="flex items-center">
                        <span className="flex-1">Shipping</span>
                        <span>Free</span>
                    </div>
                    <div className="flex items-center">
                        <span className="flex-1">Transaction Fee</span>
                        <span>{formatPrice({
                            price: fee
                        })}</span>
                    </div>
                    <div className="flex items-center">
                        <span className="flex-1">Total</span>
                        <span>{formatPrice({
                            price: fee + total
                        })}</span>
                    </div>
                </div>
                <SheetFooter>
                    <SheetTrigger asChild>
                        <Link href='/cart' className={buttonVariants({
                            className: 'w-full'
                        })}>
                            Continue to Checkout
                        </Link>
                    </SheetTrigger>
                </SheetFooter>
            </div>
        </>
    )
}