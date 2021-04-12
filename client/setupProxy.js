const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:3002', //change this to whatever you have the api running on - probably should be env vars
      changeOrigin: true
    })
  );
};
