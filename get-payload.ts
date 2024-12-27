import type { InitOptions } from "payload/config";
import payload, { Payload } from "payload";
import { env } from "./env/env";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.resend.com",
  secure: true,
  port: 465,
  auth: {
    user: "resend",
    pass: process.env.RESEND_API_KEY,
  },
});

//globals é um objeto global que pode ser acessado em qualquer lugar do node
let cache = (global as any).payload;

if (!cache) {
  cache = (global as any).payload = {
    client: null,
    promise: null,
  };
}

type Args = {
  // o partial torna tudo do generics opcional
  initOptions?: Partial<InitOptions>;
};

export async function getPayloadClient({
  initOptions,
}: Args = {}): Promise<Payload> {
  if (cache.client) {
    return cache.client;
  }

  if (!cache.promise) {
    cache.promise = payload.init({
      email: {
        transport: transporter,
        fromAddress: "onboarding@resend.dev",
        fromName: "JOJO UI",
      },
      secret: env.PAYLOAD_SECRET!,
      local: initOptions?.express ? false : true,
      ...(initOptions || {}),
    });
  }
  try {
    cache.client = await cache.promise;
  } catch (error: unknown) {
    throw error;
  }
  return cache.client;
}
