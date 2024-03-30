import next from "next";
import { env } from "./env/env";

const PORT = env.PORT;

export const nextApp = next({
  dev: process.env.NODE_ENV !== "production",
  port: PORT,
});

export const nextHandler = nextApp.getRequestHandler();
