const { Router } = require("express");

const sessionsRoutes = require("./sessions.routes");
const usersRoutes = require("./users.routes");
const productsRoutes = require("./products.routes");

const routes = Router();

routes.use("/sessions", sessionsRoutes);
routes.use("/users", usersRoutes);
routes.use("/products", productsRoutes);

module.exports = routes;