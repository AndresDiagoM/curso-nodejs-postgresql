const productsRouter =  require('./products.router');
const usersRouter =  require('./users.router');
const categoriesRouter =  require('./categories.router');
const peopleRouter =  require('./people.router');
const customersRouter =  require('./customers.router');
const ordersRouter =  require('./orders.router');
const express = require("express");

//app.use is a method in Express to register a middleware

function routerApi(app) {
  const router = express.Router();
  app.use("/api/v1", router);
  router.use("/products", productsRouter);
  router.use("/users", usersRouter);
  router.use("/categories", categoriesRouter);
  router.use("/people", peopleRouter);
  router.use("/customers", customersRouter);
  router.use("/orders", ordersRouter);
}

module.exports = routerApi;