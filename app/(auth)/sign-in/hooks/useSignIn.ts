"use client";

import { trpc } from "@/trpc/client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useSignInParams } from "./useSignInParams";

export function useSignIn() {
  const { isSeller, origin } = useSignInParams();
  const router = useRouter();

  return trpc.auth.signIn.useMutation({
    onSuccess() {
      toast.success("Signed in successfully");

      router.refresh();

      if (origin) {
        router.push(`/${origin}`);
        return;
      }

      if (isSeller) {
        router.push("/sell");
        return;
      }

      router.push("/");
      router.refresh();
    },
    onError: (error) => {
      if (error.data?.code === "UNAUTHORIZED") {
        toast.error(`Invalid email or password`);
      }
    },
  });
}
