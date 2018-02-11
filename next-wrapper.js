const { parse } = require("url");

const nextHandlerWrapper = app => {
  const handler = app.getRequestHandler();
  return async ({ raw, url }, h) => {
    await handler(raw.req, raw.res, url);
    return h.close;
  };
};
const defaultHandlerWrapper = app => async ({ raw: { req, res }, url }) => {
  const parsedUrl = parse(req.url, true);
  const { query } = parsedUrl;

  return app.render(req, res, pathname, query);
};

module.exports = { defaultHandlerWrapper, nextHandlerWrapper };
