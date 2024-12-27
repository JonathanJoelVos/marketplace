'use client'
import { env } from "@/env/env";
import { trpc } from "@/trpc/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import { PropsWithChildren, useState } from "react";
import { CartProvider } from "./cart/context/cart-contex";

export function Provider({ children }: PropsWithChildren) {
    const [queryClient] = useState(() => new QueryClient())
    const [trpcClient] = useState(() => trpc.createClient({
        links: [
            httpBatchLink({
                url: `${env.NEXT_PUBLIC_SERVER_URL}/api/trpc`,
                fetch(url, options) {
                    return fetch(url, {
                        ...options,
                        credentials: 'include',
                    })
                },
            }),
        ],
    }))
    return (

        <trpc.Provider
            client={trpcClient}
            queryClient={queryClient}>
            <QueryClientProvider client={queryClient}>
                <CartProvider>
                    {children}
                </CartProvider>
            </QueryClientProvider>
        </trpc.Provider>
    )
}