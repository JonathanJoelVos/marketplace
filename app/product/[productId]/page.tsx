import { MaxWidthWrapper } from "@/components/max-width-wrapper"
import { trpc } from "@/trpc/client"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import { Product } from "./components/product"

interface PageProps {
    params: {
        productId: string
    }
}
const BREADCRUMBS = [
    {
        id: 1,
        name: "Home",
        href: "/"
    },
    {
        id: 2,
        name: "Products",
        href: "/products"
    }
]

export default function Page({
    params: { productId }
}: PageProps) {

    return (
        <MaxWidthWrapper className="bg-white">
            <div className="max-w-2xl mx-auto px-4 py-16">
                <ol className="flex items-center gap-3">
                    {BREADCRUMBS.map(({ id, name, href }, i) => (
                        <li key={id} className="flex items-center gap-3">
                            <Link href={href} className="text-sm text-muted-foreground hover:text-gray-900 hover:cursor-pointer font-medium">
                                {name}
                            </Link>
                            {
                                i < BREADCRUMBS.length - 1 && (
                                    <div className="text-sm text-muted-foreground">
                                        <ChevronRight className="h-4 w-4" />
                                    </div>
                                )
                            }
                        </li>
                    ))}
                </ol>
                <div className="mt-4">
                    <Product productId={productId} />
                </div>
            </div>
        </MaxWidthWrapper>
    )
}