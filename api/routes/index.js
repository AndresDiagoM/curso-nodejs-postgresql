const productsRouter =  require('./products.router');
const usersRouter =  require('./users.router');
const categoriesRouter =  require('./categories.router');
const peopleRouter =  require('./people.router');
const express = require("express");

//app.use is a method in Express to register a middleware

function routerApi(app) {
  const router = express.Router();
  app.use("/api/v1", router);
  router.use("/products", productsRouter);
  router.use("/users", usersRouter);
  router.use("/categories", categoriesRouter);
  router.use("/people", peopleRouter);
}

module.exports = routerApi;