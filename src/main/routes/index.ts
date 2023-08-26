import Elysia from "elysia";
import { setup } from "../adapters/setup";

/**
 * Read all files from the routes directory and import them to setup the routes
 * 
 * @param app Elysia
 * @returns void
 * 
 * @complexity O(n) time complexity
 * @complexity O(1) space complexity
 */
export const setupRoutes = (app: Elysia) => {
  const pathName = import.meta.dir
  setup(app).create(pathName)
}