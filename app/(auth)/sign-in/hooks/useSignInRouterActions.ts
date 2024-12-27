"use client";

import { useRouter } from "next/navigation";

export function useSignInRouterActions() {
  const router = useRouter();

  function continueAsSeller() {
    router.push("?as=seller");
  }

  function continuerAsBuyer() {
    router.replace("/sign-in", undefined);
  }
  return {
    continueAsSeller,
    continuerAsBuyer,
  };
}
