import express from "express";
import { getPayloadClient } from "./get-payload";
import { nextApp, nextHandler } from "./next-utils";
import { env } from "./env/env";

const app = express();

async function start() {
  const payload = await getPayloadClient({
    initOptions: {
      express: app,
      onInit: async (cms) => {
        cms.logger.info(`Admin URL ${cms.getAdminURL()}`);
      },
    },
  });

  nextApp.prepare().then(() => {
    console.log("NEXT RODANDO");
    app.listen(env.PORT, async () => {
      payload.logger.info(`Next App URL: ${env.NEXT_PUBLIC_SERVER_URL}`);
    });
  });

  app.use((req, res) => {
    nextHandler(req, res);
  });
}

start();
