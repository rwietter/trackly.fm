import Elysia from "elysia";
import { setup } from "../adapters/setup";

export const setupMiddlewares = (app: Elysia): void => {
  const pathName = import.meta.dir
  setup(app).create(pathName)
}