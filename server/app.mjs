import Fastify from "fastify";

export function buildApp() {
  const app = Fastify({
    logger: true,
  });

  app.get("/api/health", async () => {
    return {
      success: true,
      message: "Flowboard API is running",
    };
  });

  return app;
}
