type Data = {
  username: string
  key: string
}

export const api = ({ username, key }: Data) => `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${key}&format=json&limit=1`