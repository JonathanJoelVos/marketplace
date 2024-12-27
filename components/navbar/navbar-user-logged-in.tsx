"use client"

import { DropdownMenuContent, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { DropdownMenu, DropdownMenuItem, DropdownMenuSeparator } from "../ui/dropdown-menu"
import { Button } from "../ui/button"
import Link from "next/link"
import { User } from "@/payload-types"
import { use } from "react"
import { useAuth } from "@/hooks/use-auth"

interface NavbarUserLoggedInProps {
    user: User
}
export function NavbarUserLoggedIn({
    user
}: NavbarUserLoggedInProps) {
    const { signOut } = useAuth()

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant='ghost'
                    >
                        My account
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                    className="bg-white p-2 rounded-lg  border animate-in fade-in-10 slide-in-from-top-5"
                    align="center"
                >
                    <div className='flex items-center justify-start gap-2 p-2'>
                        <div className='flex flex-col space-y-0.5 leading-none'>
                            <p className='font-medium text-sm text-black'>
                                {user.email}
                            </p>
                        </div>
                    </div>
                    <DropdownMenuSeparator />

                    <DropdownMenuItem asChild>
                        <Link href='/sell'>Seller Dashboard</Link>
                    </DropdownMenuItem>

                    <DropdownMenuItem
                        onClick={signOut}
                        className='cursor-pointer'>
                        Log out
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}