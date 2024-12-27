import { Icons } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { FormsSignIn } from "./components/forms-sign-in";
import { useSignInParams } from "./hooks/useSignInParams";

interface SignUpPageProps {
    searchParams: {
        as: string
    }
}

export default function SignUpPage({
    searchParams
}: SignUpPageProps) {

    const isSeller = searchParams.as === "seller"

    return (
        <div className="flex flex-col justify-center items-center pt-20 container text-center space-y-2">
            <Icons.logo className="w-40 h-20" />
            <h1 className="font-semibold text-2xl tracking-tight">
                Sing in to your
                {` `}
                {isSeller ? "seller" : ""}
                {` `}
                account
            </h1>
            <Link href='sign-up' className={buttonVariants({
                variant: 'link',
                className: 'gap-1.5'
            })}>
                Don&apos;t have an account?
                <ArrowRight className='h-4 w-4' />
            </Link>
            <FormsSignIn />
        </div>
    )
}