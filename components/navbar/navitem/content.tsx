import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

type Featured = {
    name: string,
    href: string,
    imageSrc: string,
}

interface NavItemContentProps {
    featureds: Featured[]
}
export function NavItemContent({
    featureds
}: NavItemContentProps) {
    return (
        <div className={cn(
            "absolute inset-x-0 text-sm text-muted-foreground animate-in fade-in-10 slide-in-from-top-5 top-full bg-white px-8 shadow"
        )}>
            <div className="grid grid-cols-3 gap-x-8 gap-y-10 py-16 max-w-7xl mx-auto">
                <div className='col-span-4 col-start-1 grid grid-cols-3 gap-x-8'>
                    {
                        featureds.map(item => (
                            <div
                                key={item.name}
                                className="group text-base sm:text-sm"
                            >
                                <Link href={item.href}>
                                    <div className="relative bg-gray-100 group-hover:opacity-65 overflow-hidden aspect-video rounded-lg">
                                        <Image
                                            src={item.imageSrc}
                                            className="object-cover object-center"
                                            alt='product category image'
                                            fill
                                        />
                                    </div>
                                    <div
                                        className="mt-6 text-gray-900 font-medium block"
                                    >
                                        <span>
                                            {item.name}
                                        </span>
                                    </div>
                                    <p
                                        className='mt-1'
                                        aria-hidden='true'>
                                        Shop now
                                    </p>
                                </Link>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}