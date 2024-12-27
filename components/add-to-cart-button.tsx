import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { CheckCircle } from "lucide-react";
import { toast } from "sonner";
import { useCartContext } from "./cart/context/cart-contex";
import { Product } from "@/payload-types";

interface AddToCartButtonProps {
    product: Product
}
export function AddToCartButton({
    product
}: AddToCartButtonProps) {
    const { addItem } = useCartContext()
    const [isSuccess, setIsSuccess] = useState(false)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsSuccess(false)
        }, 2000)
        return () => clearTimeout(timeout)
    }, [isSuccess])

    function handleCart() {
        addItem({ product })
        setIsSuccess(true)
        toast.success("Added to cart")
    }

    return (
        <Button onClick={handleCart}
            className="w-full"
            size="lg"
        >
            {
                isSuccess ? (
                    <span className="flex items-center gap-2 transition-all duration-150 animate-in fade-in-10 slide-in-from-top-5 " >
                        <CheckCircle className="w-4 h-4" /> Added!
                    </span>
                ) : "Add to cart"}
        </Button >
    )
}