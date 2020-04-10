const { Router } = require("express");

const SessionController = require("./controllers/SessionController");
const SessionValidator = require("./validators/SessionValidator");
const UserController = require("./controllers/UserController");
const UserValidator = require("./validators/UserValidator");

const AuthMiddleware = require("./middlewares/AuthMiddleware");
const LogMiddleware = require("./middlewares/LogMiddleware");

const routes = Router();
const v1Routes = Router();

// Session Routes
v1Routes.post("/session", SessionValidator, SessionController.login);

// User Routes
v1Routes.get("/users", AuthMiddleware, UserController.find);
//v1Routes.get('/users', AuthMiddleware, UserController.index);
v1Routes.post("/users", UserValidator, UserController.store);
v1Routes.put("/users", AuthMiddleware, UserValidator, UserController.update);
v1Routes.delete("/users", AuthMiddleware, UserController.delete);

routes.use("/api/v1", v1Routes);

module.exports = routes;
