// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const jsonServer = require("json-server");

const server = jsonServer.create();
const router = jsonServer.router("db.json");

server.use(router);
server.listen(3000);
