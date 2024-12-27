import { ImageSlider } from "@/components/ui/image-slider"
import { Skeleton } from "@/components/ui/skeleton"
import { PRODUCT_CATEGORIES } from "@/config/products"
import { cn, formatPrice } from "@/lib/utils"
import { Product } from "@/payload-types"
import Link from "next/link"
import { useEffect, useState } from "react"

interface ProductListingProps {
    product: Product | null
    index: number
}
export function ProductListing({
    index,
    product
}: ProductListingProps) {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(true)
        }, index * 75)
    }, [index])


    if (!product || !isVisible) {
        return <ProductPlaceholder />
    }

    const validsUrls = product.images.map(({ image }) => {
        return typeof image === 'string' ? image : image.url
    })
        .filter(Boolean) as string[]

    const label = PRODUCT_CATEGORIES.find((p) => p.value === product.category)?.label

    return (
        <Link href={`/product/${product.id}`} className={cn('invisible h-full w-full cursor-pointer group/main', {
            'visible animate-in fade-in-5': isVisible
        })}>
            <div className='flex flex-col w-full max-w-xs '>
                <ImageSlider urls={validsUrls} />
                <h3 className="mt-5 font-medium text-sm text-gray-700">
                    {product.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                    {label}
                </p>
                <p className="mt-1 font-medium text-sm text-gray-900">
                    {formatPrice({ price: product.price })}
                </p>
            </div>
        </Link>
    )
}

interface ProductPlaceholderProps {

}
export function ProductPlaceholder(props: ProductPlaceholderProps) {
    return (
        <div className='flex flex-col w-full max-w-xs'>
            <div className='relative bg-zinc-100 aspect-square w-full overflow-hidden rounded-xl'>
                <Skeleton className='h-full w-full' />
            </div>
            <Skeleton className='mt-4 w-2/3 h-4 rounded-lg' />
            <Skeleton className='mt-2 w-16 h-4 rounded-lg' />
            <Skeleton className='mt-2 w-12 h-4 rounded-lg' />
        </div>
    )
}