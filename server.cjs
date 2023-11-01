// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const jsonServer = require("json-server");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use((req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://react-quiz-web.pages.dev",
  );
  next();
});

server.use(router);
server.listen(3000);
