import Elysia from "elysia";
import fs from 'node:fs'

interface SetupAppFile {
  create(path: string): Promise<void>
}

export const setup = (app: Elysia): SetupAppFile => {

  return {
    create: async (path: string) => {
      const files = fs.readdirSync(path)

      files.forEach((file) => {
        if (file.match(/index\.ts$/)) return

        const filePath = path + '/' + file

        return require(filePath).default(app)
      })
    }
  }
}