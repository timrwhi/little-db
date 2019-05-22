# Little Database
A tiny, in-memory, node.js-based key/value store with some REST endpoints.

## Getting Started
```sh
$ yarn && yarn serve
```

## Endpoints
```
GET    /comments
GET    /comments/:id
POST   /comments
DELETE /comments/:id
```

## Deploy
Deploy using [now.sh](https://zeit.co/now)
```
$ yarn deploy
```