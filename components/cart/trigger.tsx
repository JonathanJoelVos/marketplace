'use client'

import { ShoppingCart } from "lucide-react";
import { SheetTrigger } from "../ui/sheet";

interface TriggerCartProps {
    qntItems: number
}
export function TriggerCart({
    qntItems
}: TriggerCartProps) {
    return (
        <SheetTrigger className="group flex items-center gap-1 relative p-2 rounde">
            <ShoppingCart
                aria-hidden='true'
                className='h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500'
            />
            <div className="bg-primary w-4 h-4 rounded-full flex justify-center items-center absolute left-6 top-0 p-1">
                <span className="text-white text-xs">
                    {qntItems}
                </span>
            </div>
        </SheetTrigger>
    )
}