import { appConfig } from "@/config/appConfig";
import { Button, buttonVariants } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Link from "next/link";


interface HeroProps {

}
export function Hero(props: HeroProps) {
    return (
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto py-24">
            <h1 className="text-4xl sm:text-6xl text-gray-900 font-bold tracking-tight">
                Your marketplace for high-quality <span className="text-primary">digital assets</span>.
            </h1>
            <p className="max-w-prose text-muted-foreground mt-6 text-lg">
                Welcome to {appConfig.NAME}. Every asset on our plataform is verified by our team to ensure our highest quality standards.
            </p>
            <div className="flex flex-col sm:flex-row mt-6 gap-4">
                <Link href='/products' className={buttonVariants()}>
                    Browse Trending
                </Link>
                <Button variant="ghost" >
                    Our quality promise
                    <MoveRight className="ml-2 font-light w-4 h-4" />
                </Button>
            </div>
        </div>
    )
}