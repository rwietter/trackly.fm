export interface Recenttracks {
  recenttracks: Tracks
}

export interface Tracks {
  track: Track[]
  "@attr": {
    user: string
    totalPages: string
    page: string
    perPage: string
    total: string
  }
}

export interface Track {
  artist: Artist
  streamable: string
  image: Image[]
  mbid: string
  album: Album
  name: string
  "@attr"?: {
    nowplaying: string
  }
  url: string
  date?: Date
}

export interface Artist {
  mbid: string
  "#text": string
}

export interface Image {
  size: string
  "#text": string
}

export interface Album {
  mbid: string
  "#text": string
}

export interface Date {
  uts: string
  "#text": string
}