import { app } from "./main/app";
import { setupRoutes } from "./main/routes";
import { setupMiddlewares } from "./main/middlewares";

setupRoutes(app)
setupMiddlewares(app)

app.listen({
  hostname: process.env.SERVER_HOSTNAME || "localhost",
  port: process.env.SERVER_PORT || 3000,
  development: process.env.NODE_ENV === "development",
})

console.log(
  `🦊 App is running at ${app.server?.hostname}:${app.server?.port}`
);
