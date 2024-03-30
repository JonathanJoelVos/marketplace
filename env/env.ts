import dotenv from "dotenv";
import path from "path";
import { z } from "zod";

const pathResolve = path.resolve(__dirname, "../.env");

dotenv.config({
  path: pathResolve,
});

const envSchema = z.object({
  PAYLOAD_SECRET: z.string().optional(),
  PORT: z.coerce.number().default(3000),
  NEXT_PUBLIC_SERVER_URL: z.string().optional(),
  MONGODB_URL: z.string().optional(),
});

const _env = envSchema.safeParse({
  PAYLOAD_SECRET: process.env.PAYLOAD_SECRET,
  PORT: process.env.PORT,
  NEXT_PUBLIC_SERVER_URL: process.env.NEXT_PUBLIC_SERVER_URL,
  MONGODB_URL: process.env.MONGODB_URL,
});

if (!_env.success) {
  console.log(_env.error.format());
  throw new Error("Env failed");
}

export const env = _env.data;
