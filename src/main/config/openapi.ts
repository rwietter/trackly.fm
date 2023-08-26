
import { type swagger } from '@elysiajs/swagger';

type SwaggerOptions = Parameters<typeof swagger>[0];

/**
 * @openapi Configuration for OpenAPI documentation.
 */
export const openApiOptions: SwaggerOptions = {
  documentation: {
    info: {
      title: "Trackly.fm",
      version: "1.0.0",
      description: "A clean API to get the currently playing song on Last.fm",
      license: {
        name: "MIT",
        url: "github.com/elysia-dev/elysia/blob/main/LICENSE"
      },
    },
    openapi: "3.0.0",
    servers: [
      {
        url: "http://localhost:3000",
        description: "Development server",
      }
    ],
    components: {
      schemas: {
        User: {
          type: "object",
          title: "Playing song",
          required: ["username", "key"],
          description: "Get the currently playing song of a Last.fm user",
          properties: {
            username: {
              type: "string",
            },
            key: {
              type: "string",
            },
          },
        },
      },
    },
    tags: [
      {
        name: "Playing",
        description: "Playing related endpoints",
      }
    ]
  },
  path: "/docs",
}