import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react"
import { Perks } from "../types/perks"

const perks: Perks[] = [
    {
        name: 'Instant Delivery',
        Icon: ArrowDownToLine,
        description: 'Get your assets delivered to your email in seconds and download them right away.'
    },
    {
        name: 'Guarenteed Quality',
        Icon: CheckCircle,
        description: 'Every asset on our plataform is verified by our team to ensure highest quality standard. Not happy? We offer a 30-day refund guarantee.'
    },
    {
        name: 'For the Planet',
        Icon: Leaf,
        description: "We've pleged 1% of sales to the preservation and restoration of the natural environment."
    },
]

interface PerksProps {

}

export function Perks(props: PerksProps) {
    return (
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map(perk => (
                <div
                    key={perk.name}
                >
                    <div className="md:flex md:items-center lg:block">
                        <div className="md:flex-shrink-0 flex justify-center">
                            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-rose-100 text-primary">
                                <perk.Icon className="w-1/3 h-1/3" />
                            </div>
                        </div>
                        <div className="mt-6 text-center md:text-left lg:text-center md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                            <h3 className="text-base font-medium text-gray-900">
                                {perk.name}
                            </h3>
                            <p className="mt-3 text-sm text-muted-foreground">
                                {perk.description}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}