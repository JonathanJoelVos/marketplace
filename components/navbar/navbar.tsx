import Link from "next/link";
import { Icons } from "../icons";
import { MaxWidthWrapper } from "../max-width-wrapper";
import { NavItems } from "./navitems";
import { NavbarUserLoggedOut } from "./navbar-user-logged-out";
import { Cart } from "../cart";

interface NavbarProps {

}
export function Navbar(props: NavbarProps) {
    const user = null

    return (
        <div className="sticky top-0 z-50 h-16 bg-white">
            <header className="relative">
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
                                    user ? null : <NavbarUserLoggedOut />
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