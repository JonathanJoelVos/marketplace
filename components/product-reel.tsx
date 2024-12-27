'use client'
import { TQueryValidator } from "@/lib/validators/query-validator"
import { Product } from "@/payload-types"
import { trpc } from "@/trpc/client"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { ProductListing } from "../app/(landingpage)/components/product-listing"

interface ProductReelProps {
    title: string
    subtitle?: string
    href?: string
    query: TQueryValidator
}

const FALLBACK_LIMIT = 4
export function ProductReel({
    title,
    subtitle,
    href,
    query
}: ProductReelProps) {

    const { data: queryResult, isLoading } = trpc.getInfiniteProducts.useInfiniteQuery({
        limit: query.limit ?? FALLBACK_LIMIT,
        query
    }, {
        getNextPageParam: (lastPage) => lastPage.nextPage
    })

    const products = queryResult?.pages.flatMap((page) => page.items)
    console.log(products)

    let map: (Product | null)[] = []

    if (products && products.length) {
        map = products
    } else if (isLoading) {
        map = new Array<null>(query.limit ?? FALLBACK_LIMIT).fill(null)
    }

    return (
        <div className="py-12">
            <div className="flex justify-between mb-4">
                <div className="flex flex-col gap-1">
                    <h1 className="text-gray-900 text-xl md:text-2xl font-bold">
                        {title}
                    </h1>
                    {subtitle ? (
                        <p className='mt-2 text-sm text-muted-foreground'>
                            {subtitle}
                        </p>
                    ) : null}
                </div>
                {
                    href ? (
                        <Link href={href} className="md:flex md:items-center gap-1 text-primary hover:underline text-sm hidden ">
                            Shop the collection{` `}
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    ) : null
                }
            </div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-10 lg:gap-x-8">
                {
                    map.map((product, i) => (
                        <ProductListing
                            index={i}
                            product={product}
                            key={i}
                        />
                    ))
                }
            </div>
        </div>
    )
}