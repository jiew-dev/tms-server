# Teacher Management API

## Running Locally

**Prerequisites**

- Node 22.14.0
- Docker (for Postgres)

- Install dependencies

```
npm install
```

- Start postgres (using Docker here)

```
docker compose up -d
```

- Copy `.env.sample` to `.env` (for now no change required)
  - This sets `PORT=8000` and the PG URI to connect to the PG started by `docker-compose`

- Start dev server

```
npm run start:dev
```

You should be able to access API via Swagger [http://localhost:8000/docs](http://localhost:8000/docs)