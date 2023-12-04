const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    createProxyMiddleware("/api/get", {
      target: "http://127.0.0.1:8080",
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware("/api/update", {
      target: "http://127.0.0.1:8080",
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware("/api/delete", {
      target: "http://127.0.0.1:8080",
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware("/api/create", {
      target: "http://127.0.0.1:8080",
      changeOrigin: true,
    })
  );
};
