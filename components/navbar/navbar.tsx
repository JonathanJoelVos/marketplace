import Link from "next/link";
import { Icons } from "../icons";
import { MaxWidthWrapper } from "../max-width-wrapper";
import { NavItems } from "./navitems";
import { NavbarUserLoggedOut } from "./navbar-user-logged-out";
import { Cart } from "../cart";
import { getServerSideUser } from "@/lib/payload-utils";
import { cookies } from "next/headers";
import { NavbarUserLoggedIn } from "./navbar-user-logged-in";

interface NavbarProps {

}
export async function Navbar(props: NavbarProps) {
    const nextCookies = cookies()
    const { user } = await getServerSideUser(nextCookies)

    return (
        <div className="sticky top-0 z-50 h-16 bg-white">
            <header className="relative bg-white">
                <MaxWidthWrapper>
                    <div className="border-b border-gray-200">
                        <div className="flex items-center">
                            <div className="ml-4 lg:ml-0 flex">
                                <Link href="/">
                                    <Icons.logo className="w-20 h-20" />
                                </Link>
                            </div>
                            <div className="hidden z-50 lg:ml-8 lg:block ">
                                <NavItems />
                            </div>
                            <div className="ml-auto lg:items-center hidden lg:flex lg:space-x-6">
                                {
                                    user ? <NavbarUserLoggedIn user={user} /> : <NavbarUserLoggedOut />
                                }
                                <Cart />
                            </div>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </header>
        </div>
    )
}