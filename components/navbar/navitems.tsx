'use client'

import { PRODUCT_CATEGORIES } from "@/config/products";
import { NavItem } from "./navitem";
import { useNavbar } from "./hooks/useNavbar";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";
import { useRef } from "react";

interface NavItemsProps {

}
export function NavItems(props: NavItemsProps) {
    const { activeItem, updateActiveItem, closeNavbar } = useNavbar()
    const navRef = useRef<HTMLDivElement | null>(null)

    useOnClickOutside<HTMLDivElement>(navRef, () => closeNavbar())

    return (
        <div className="flex items-center gap-4" ref={navRef}>
            {PRODUCT_CATEGORIES.map(category => (
                <NavItem
                    key={category.value}
                    category={category}
                    handleOpen={() => updateActiveItem(category.value)}
                    isOpen={category.value === activeItem}
                />
            ))}
        </div>
    )
}