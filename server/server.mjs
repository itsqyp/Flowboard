import "dotenv/config";

import { buildApp } from "./app.mjs";
import { connectDatabase } from "./config/database.mjs";

const app = buildApp();

const PORT = Number(process.env.PORT) || 3000;
const HOST = process.env.HOST || "127.0.0.1";

try {
  await connectDatabase();

  await app.listen({
    port: PORT,
    host: HOST,
  });
} catch (error) {
  app.log.error(error);
  await app.close();
  process.exit(1);
}
