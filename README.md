# Trackly.fm

A clean, simple, and easy API for tracking your music listening in real time using Last.fm. If you're connected to Spotify, it will also track your Spotify listening. 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. For production, you'll need to deploy it to a server or use the hosted version at [trackly.fm](https://trackly.fm).

### Prerequisites

You'll need to have a Last.fm account and a Last.fm API key. You can get one [here](https://www.last.fm/api/account/create).

- API Key
- Last.fm username

### Installing

Clone the repo and install the dependencies.

```bash
git clone https://github.com/rwietter/trackly.fm.git
cd trackly.fm
```

Install the dependencies.

```bash
bun install
```

Run the server.

```bash
bun run dev
```

## Built With

- [TypeScript](https://www.typescriptlang.org/) - The language used
- [Bun](https://bun.sh/) - A runtime for TypeScript
- [Elysia](https://elysiajs.com/) - A TypeScript framework for building APIs

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md)

## Consuming the API

Send a GET request for the following example URL to get the currently playing track for your Last.fm account.

```
curl -X GET 'http://localhost:3000/song?key=<lastfm-key>&user=<lasfm-user>' | jq
```

Example

```
curl -X GET 'http://localhost:3000/song?key=abc1234d56e78f91g23456h7i8jklm9n&user=rwietter' | jq
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
