# Little Database
[Demo →](https://little-db.now.sh/)

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
       { id: string }
DELETE /comments/:id
```
