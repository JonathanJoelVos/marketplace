import { z } from "zod";
import { publicProcedure, router } from "./trpc";
import { getPayloadClient } from "../get-payload";
import { TRPCError } from "@trpc/server";

export const productsRouter = router({
  getProductById: publicProcedure
    .input(
      z.object({
        productId: z.string(),
      })
    )
    .query(async ({ input }) => {
      const { productId } = input;
      try {
        const payload = await getPayloadClient();
        console.log("passou auqi", productId);

        const { docs } = await payload.find({
          collection: "products",
          limit: 1,
          where: {
            id: {
              equals: productId,
            },
            approvedForSale: {
              equals: "approved",
            },
          },
        });
        console.log(docs);
        return {
          product: docs[0],
        };
      } catch (error) {
        throw new TRPCError({ code: "NOT_FOUND" });
      }
    }),
});
