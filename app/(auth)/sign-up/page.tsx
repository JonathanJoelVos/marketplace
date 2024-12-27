import { Icons } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useFormAccountCredentials } from "../hooks/useFormAccountCredentials";
import { TAuthCredentialsValidator } from "@/lib/validators/account-credentials-validator";
import { FormsSignUp } from "./components/forms-sign-up";

interface SignUpPageProps {

}
export default function SignUpPage(props: SignUpPageProps) {


    return (
        <div className="flex flex-col justify-center items-center pt-20 container text-center space-y-2">
            <Icons.logo className="w-40 h-20" />
            <h1 className="font-semibold text-2xl tracking-tight">
                Create an account
            </h1>
            <Link href='sign-in' className={buttonVariants({
                variant: 'link',
                className: 'gap-1.5'
            })}>
                Already have an account? Sign-in
                <ArrowRight className='h-4 w-4' />
            </Link>
            <FormsSignUp />
        </div>
    )
}