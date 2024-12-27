"use client";

import { useSearchParams } from "next/navigation";

export function useSignInParams() {
  const searchParams = useSearchParams();
  const isSeller = searchParams.get("as") === "seller";
  const origin = searchParams.get("origin");
  return {
    isSeller,
    origin,
  };
}
