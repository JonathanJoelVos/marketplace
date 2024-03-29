import { Store } from "lucide-react";
import { buttonVariants } from "../ui/button";
import Link from "next/link";

interface EmptyCartProps {

}
export function EmptyCart(props: EmptyCartProps) {
    return (
        <>
            <div className="flex-1 justify-center items-center  flex flex-col">
                <Store className=" w-20 h-20 opacity-10" />
                <span className="font-bold text-xl mt-5">
                    Yout cart is empty
                </span>
                <Link
                    href='/products'
                    className={buttonVariants({
                        variant: 'link',
                        className: 'text-sm',
                        size: 'sm'
                    })}
                >
                    Add items to your cart to checkout
                </Link>
            </div>
        </>
    )
}