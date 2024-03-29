import { formatPrice } from "@/lib/utils";
import { Separator } from "../ui/separator";
import { SheetFooter, SheetTrigger } from "../ui/sheet";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

interface ListItemsCartProps {
    fee: number
}
export function ListItemsCart({
    fee
}: ListItemsCartProps) {
    return (
        <>
            <div className="space-y-6 text-sm">
                <span>
                    Items
                </span>
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
                            price: fee
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