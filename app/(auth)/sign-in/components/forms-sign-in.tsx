'use client'

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { TAuthCredentialsValidator } from "@/lib/validators/account-credentials-validator";
import { Button } from "@/components/ui/button";
import { trpc } from "@/trpc/client";
import { useRouter } from "next/navigation";
import { toast } from 'sonner'
import { useFormAccountCredentials } from "../../hooks/useFormAccountCredentials";
import { useSignInParams } from "../hooks/useSignInParams";
import { useSignIn } from "../hooks/useSignIn";
import { useSignInRouterActions } from "../hooks/useSignInRouterActions";

export function FormsSignIn() {
    const { handleSubmit, register, formState: { errors } } = useFormAccountCredentials()
    const { mutate: signIn, isPending: isLoading } = useSignIn()

    const { isSeller } = useSignInParams()

    const { continueAsSeller, continuerAsBuyer } = useSignInRouterActions()

    async function onSubmit({ email, password }: TAuthCredentialsValidator) {
        signIn({ email, password })
    }

    return (
        <>
            <form className="w-full max-w-md mt-10" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col items-start gap-2">
                        <Label htmlFor="email" >Email</Label>
                        <Input
                            className={cn({
                                "focus-visible:ring-red-500": errors.email
                            })}
                            placeholder='you@example.com'
                            {...register('email')}
                        />
                        {errors?.email && (
                            <p className='text-xs md:text-sm text-red-500'>
                                {errors.email.message}
                            </p>
                        )}
                    </div>
                    <div className="flex flex-col items-start gap-2">
                        <Label htmlFor="password" >Password</Label>
                        <Input
                            className={cn({
                                "focus-visible:ring-red-500": errors.password
                            })}
                            type="password"
                            placeholder='Password'
                            {...register('password')}
                        />
                        {errors?.password && (
                            <p className='text-xs md:text-sm text-red-500'>
                                {errors.password.message}
                            </p>
                        )}
                    </div>
                    <Button type="submit">Sign In</Button>
                    <div className='relative'>
                        <div
                            aria-hidden='true'
                            className='absolute inset-0 flex items-center'>
                            <span className='w-full border-t' />
                        </div>
                        <div className='relative flex justify-center text-xs uppercase'>
                            <span className='bg-background px-2 text-muted-foreground'>
                                or
                            </span>
                        </div>
                    </div>
                    {
                        isSeller ? (
                            <Button
                                variant="secondary"
                                onClick={continuerAsBuyer}
                                disabled={isLoading}
                                type="button"
                            >
                                Continue as customer
                            </Button>
                        ) : (
                            <Button
                                variant="secondary"
                                onClick={continueAsSeller}
                                disabled={isLoading}
                                type="button"
                            >
                                Continuer as seller
                            </Button>
                        )
                    }
                </div>
            </form >
        </>
    )
}