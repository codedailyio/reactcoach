const next = require("next");
const Hapi = require("hapi");

const { defaultHandlerWrapper, nextHandlerWrapper } = require("./next-wrapper");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const server = new Hapi.Server({
  port,
});

app.prepare().then(async () => {
  server.route({
    method: "GET",
    path: "/_next/{p*}",
    handler: nextHandlerWrapper(app),
  });
  server.route({
    method: "GET",
    path: "/{p*}",
    handler: nextHandlerWrapper(app),
  });

  try {
    await server.start();
    console.log(`> Ready on http://localhost:${port}`);
  } catch (error) {
    console.log("Error starting server");
    console.log(error);
  }
});
