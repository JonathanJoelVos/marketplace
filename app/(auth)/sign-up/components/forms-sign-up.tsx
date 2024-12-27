'use client'

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useFormAccountCredentials } from "../../hooks/useFormAccountCredentials";
import { TAuthCredentialsValidator } from "@/lib/validators/account-credentials-validator";
import { Button } from "@/components/ui/button";
import { trpc } from "@/trpc/client";
import { useRouter } from "next/navigation";
import { toast } from 'sonner'
import { ZodError } from "zod";

interface FormsSignUpProps {

}
export function FormsSignUp(props: FormsSignUpProps) {
    const router = useRouter()
    const { handleSubmit, register, formState: { errors } } = useFormAccountCredentials()

    const { mutate, } = trpc.auth.createPayloadUser.useMutation({
        onError: (error) => {
            if (error?.data?.code === 'CONFLICT') {
                toast.error(
                    'This email is already in use. Sign in instead?'
                )
                return
            }

            if (error instanceof ZodError) {
                toast.error(
                    error.issues[0].message
                )
                return
            }

            toast.error(
                'Something went wrong. Please try again.'
            )

        },
        onSuccess: ({ sendToEmail }) => {
            toast.success(
                `Verification email sent to ${sendToEmail}.`
            )
            router.push(`/verify-email?to=${sendToEmail}`)
        }
    })

    function onSubmit({ email, password }: TAuthCredentialsValidator) {
        mutate({ email, password })
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
                    <Button>Sign Up</Button>
                </div>
            </form >
        </>
    )
}