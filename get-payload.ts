import type { InitOptions } from "payload/config";
import payload from "payload";
import { env } from "./env/env";

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

export async function getPayloadClient({ initOptions }: Args = {}) {
  if (cache.client) {
    return cache.client;
  }

  if (!cache.promise) {
    cache.promise = payload.init({
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
