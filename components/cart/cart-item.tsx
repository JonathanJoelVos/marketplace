import Image from "next/image"
import { CartItemType } from "./hooks/types/state-type"
import { ImageIcon, X } from "lucide-react"
import { PRODUCT_CATEGORIES } from "@/config/products"
import { useCartContext } from "./context/cart-contex"

interface CartItemProps {
    item: CartItemType
}
export function CartItem({
    item
}: CartItemProps) {
    const { image } = item.product.images[0]
    const label = PRODUCT_CATEGORIES.find(
        ({ value }) => value === item.product.category
    )?.label
    const { removeItem } = useCartContext()
    return (
        <div className="w-full flex gap-3 items-center">
            <div>
                {
                    typeof image !== 'string' && image.url ? (
                        <div className="relative h-16 w-16 aspect-square overflow-hidden min-w-fit shadow-md rounded-md">
                            <Image
                                src={image.url}
                                className="object-cover absolute"
                                fill
                                alt="Imagem do produto"
                            />
                        </div>
                    ) : (
                        <div>
                            <ImageIcon className="w-4 h-4" />
                        </div>
                    )
                }
            </div>
            <div className=" flex flex-col">

                <span className="text-sm font-medium mb-1 line-clamp-1">
                    {item.product.name}
                </span>
                <span className="text-xs text-muted-foreground">
                    {label}
                </span>
                <div className='mt-2 text-xs text-muted-foreground'>
                    <button
                        onClick={() => removeItem(item.product.id)}
                        className='flex items-center gap-0.5'>
                        <X className='w-3 h-4' />
                        Remove
                    </button>
                </div>
            </div>
        </div>
    )
}