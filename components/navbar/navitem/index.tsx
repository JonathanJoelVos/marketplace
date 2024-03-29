import { PRODUCT_CATEGORIES } from "@/config/products"
import { NavItemContent } from "./content"
import { NavItemButton } from "./button"

type Category = typeof PRODUCT_CATEGORIES[number]

interface NavItemProps {
    category: Category
    handleOpen: () => void
    isOpen: boolean
}
export function NavItem({
    category,
    handleOpen,
    isOpen,
}: NavItemProps) {
    return (
        <div className="flex">
            <NavItemButton
                onClick={handleOpen}
                label={category.label}
                isSelected={isOpen}
            />
            {
                isOpen && <NavItemContent featureds={category.featured} />
            }
        </div >
    )
}