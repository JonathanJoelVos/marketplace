import Image from "next/image"
import EmailIconSVG from '../../../public/email_icon.svg'
import VerifyEmail from "./components/verify-email"


interface VerifyEmailPageProps {
    searchParams: {
        [key: string]: string | string[] | undefined
    }
}
export default function VerifyEmailPage({
    searchParams
}: VerifyEmailPageProps) {
    const token = searchParams.token
    const toEmail = searchParams.to

    return (
        <div className='flex pt-20 flex-col items-center justify-center lg:px-0'>
            {token && typeof token === 'string' ? (
                <div className='grid gap-6'>
                    <VerifyEmail token={token} />
                </div>
            ) : (
                <div className='flex h-full flex-col items-center justify-center space-y-1'>
                    <div className='relative mb-4 h-20 w-20 text-muted-foreground'>
                        <Image
                            src={EmailIconSVG}
                            fill
                            alt='hippo email sent image'
                        />
                    </div>

                    <h3 className='font-semibold text-2xl'>
                        Check your email
                    </h3>

                    {toEmail ? (
                        <p className='text-muted-foreground text-center'>
                            We&apos;ve sent a verification link to{' '}
                            <span className='font-semibold'>
                                {toEmail}
                            </span>
                            .
                        </p>
                    ) : (
                        <p className='text-muted-foreground text-center'>
                            We&apos;ve sent a verification link to your
                            email.
                        </p>
                    )}
                </div>
            )}
        </div>
    )
}