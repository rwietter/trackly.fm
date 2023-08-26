import { Elysia, t } from "elysia";
import { Recenttracks } from "../../domain/models/track";
import { api } from "../services/api";

const validator = {
  query: t.Object({
    key: t.String()
  }),
}

export default async (app: Elysia) => {
  app.get(
    "/song/:user",
    async (context) => {
      const username = context.params.user
      const key = context.query.key

      const response = await fetch(api({ username, key }))

      context.set.headers = {
        "Content-Type": "application/json",
      }

      if (!response.ok) {
        context.set.status = 404

        return {
          data: {
            error: "User not found or API key is invalid"
          }
        }
      }

      const json: Recenttracks = await response.json()

      context.set.status = 200

      const track = json.recenttracks.track[0]

      const data = {
        isPlaying: track["@attr"]?.nowplaying === "true",
        song: track.name,
        artist: track.artist["#text"],
        album: track.album["#text"],
        images: {
          small: track.image[0]["#text"],
          medium: track.image[1]["#text"],
          large: track.image[2]["#text"],
          extralarge: track.image[3]["#text"],
        },
        url: track.url,
        username: json.recenttracks["@attr"].user,
      }

      return new Response(JSON.stringify(data), {
        status: 200,
      })
    }, validator
  )
}

