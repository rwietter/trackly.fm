import swagger from "@elysiajs/swagger";
import Elysia from "elysia";
import { openApiOptions } from "../config/openapi";

export default (app: Elysia) => {
  app.use(swagger(openApiOptions))
}