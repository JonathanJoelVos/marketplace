'use client'
import { AddToCartButton } from "@/components/add-to-cart-button"
import { ProductReel } from "@/components/product-reel"
import { Button } from "@/components/ui/button"
import { ImageSlider } from "@/components/ui/image-slider"
import { PRODUCT_CATEGORIES } from "@/config/products"
import { formatPrice } from "@/lib/utils"
import { trpc } from "@/trpc/client"
import { Check, Shield } from "lucide-react"
import { notFound } from "next/navigation"

interface ProductProps {
    productId: string
}
export function Product({
    productId
}: ProductProps) {
    const { data, error, isLoading } = trpc.products.getProductById.useQuery({
        productId
    })

    if (error?.data?.code === "NOT_FOUND") {
        return notFound()
    }

    if (isLoading) {
        return (
            <div className=" flex flex-col gap-4">
                <div className="h-9 w-64 max-w-xs animate-pulse bg-slate-100 rounded-md" />
                <div className="h-5 w-20 animate-pulse bg-slate-100 rounded-md" />
                <div className="h-20 w-full animate-pulse bg-slate-100 rounded-md" />
                <div className="h-5 w-28 animate-pulse bg-slate-100 rounded-md" />
                <div className="h-60 md:h-[500px] w-full animate-pulse bg-slate-100 rounded-md" />
                <div className="h-10 w-full animate-pulse bg-slate-100 rounded-md" />
                <div className="h-5 w-28 animate-pulse bg-slate-100 rounded-md mt-10" />
                <div className="h-5 w-full animate-pulse bg-slate-100 rounded-md" />
                <div className="flex gap-3">
                    <div className="h-32 w-32 animate-pulse bg-slate-100 rounded-md" />
                    <div className="h-32 w-32 animate-pulse bg-slate-100 rounded-md" />
                </div>
            </div>
        )
    }

    const label = PRODUCT_CATEGORIES.find(({ value }) => value === data?.product.category)?.label

    const validsUrls = data?.product.images.map(({ image }) => {
        return typeof image === 'string' ? image : image.url
    })
        .filter(Boolean) as string[]

    return (
        <>
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl tracking-tight">
                {data?.product.name}
            </h1>
            <section className="mt-4 flex items-center gap-4 ">
                <p className="font-medium text-gray-900 text-xs">
                    {formatPrice({
                        price: data?.product.price!,
                    })}
                </p>
                <div className="border-l border-gray-300 pl-4 text-muted-foreground text-xs">
                    {label}
                </div>
            </section>
            <div className="mt-4 space-y-6">
                <p className="text-base text-muted-foreground">
                    {data?.product.description}
                </p>
            </div>
            <div className="mt-6 flex items-center gap-2">
                <Check aria-hidden="true" className="h-3 w-3 flex-shrink-0 text-green-500" />
                <p className="text-xs text-muted-foreground">
                    Eligible for instant delivery
                </p>
            </div>
            <div className="shadow-md rounded-xl mt-6 aspect-square">
                <ImageSlider urls={validsUrls} />
            </div>
            <div className="flex flex-col items-center gap-4 mt-4">
                {data?.product && <AddToCartButton product={data?.product} />}
                <div className="flex items-center gap-2">
                    <Shield aria-hidden="true" className="h-4 w-4 text-gray-400" />
                    <span className="text-muted-foreground hover:text-gray-700">
                        30 Days Return Guarantee
                    </span>
                </div>
            </div>
            <ProductReel
                href="/products"
                query={{
                    category: data?.product.category,
                    limit: 4
                }}
                title={`Similar ${label}`}
                subtitle={`Browse similar high-quality ${label} just like '${data?.product.name}'`}
            />
        </>
    )
}