// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const jsonServer = require("json-server");

import { API_URL } from "@/config";

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", API_URL);
  next();
});

server.use(router);
server.listen(3000);
