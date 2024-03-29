import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

interface NavItemButtonProps {
    onClick: () => void
    isSelected: boolean
    label: string
}
export function NavItemButton({
    onClick,
    isSelected,
    label
}: NavItemButtonProps) {
    return (
        <div className="relative flex items-center">
            <Button
                className="gap-1.5"
                onClick={onClick}
                variant={isSelected ? 'secondary' : 'ghost'}
            >
                {label}
                <ChevronDown
                    className={cn("w-4 h-4 transition-all text-muted-foreground",
                        {
                            '-rotate-180': isSelected
                        })}
                />
            </Button>
        </div>
    )
}