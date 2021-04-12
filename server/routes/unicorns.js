/* eslint-disable no-undef */
const { Router } = require('express');

const unicornsRouter = new Router();

const UnicornsController = require('./../controllers/unicorns.controller.js');

module.exports = (appRouter) => {
  // theme specific routes
  console.log(UnicornsController);
  // fetch the current unicorns
  unicornsRouter
    .route('/')
    .get(UnicornsController.fetchUnicorn)
    .post(UnicornsController.createUnicorn);

  // attach the api router to the appRouter
  appRouter.use('/unicorns', unicornsRouter);
};
