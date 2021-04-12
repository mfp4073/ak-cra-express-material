// this files gets called from the app.js and is responsible for setting up all the routes
const { Router } = require('express');
// all the custom routers
const apiRouter = new Router();
// create an array of endPoints
const endPoints = ['/unicorns'];

module.exports = (app) => {
  // top level api routes
  endPoints.forEach((endpoint) => {
    // add it to the apiRouter
    apiRouter.route(endpoint);
    // require the individual route files
    require(`.${endpoint}`)(apiRouter);
  });
  // name space them
  app.use('/api', apiRouter);
};
