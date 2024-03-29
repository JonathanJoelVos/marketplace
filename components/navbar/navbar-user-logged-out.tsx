import Link from "next/link";
import { buttonVariants } from "../ui/button";

interface NavbarUserLoggedOutProps {

}
export function NavbarUserLoggedOut(props: NavbarUserLoggedOutProps) {
    return (
        <>
            <Link href='/sign-in' className={buttonVariants({ variant: 'ghost' })}>
                Sign In
            </Link>
            <div className="h-6 bg-gray-200 w-px" aria-hidden="true" />
            <Link
                href='/sign-up'
                className={buttonVariants({
                    variant: 'ghost',
                })}>
                Create account
            </Link>
            <div className="h-6 bg-gray-200 w-px" aria-hidden="true" />
        </>
    )
}