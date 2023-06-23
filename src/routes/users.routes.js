const { Router } = require("express");
// const uploadConfig = require("../configs/upload");

const UsersController = require("../controllers/UsersController");
//const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const usersRoutes = Router();

const usersController = new UsersController();


usersRoutes.post("/",  usersController.create);

module.exports = usersRoutes;