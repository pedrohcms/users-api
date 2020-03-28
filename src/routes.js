const { Router } = require('express');

const UserController = require('./controllers/UserController');
const UserValidator = require('./validators/UserValidator');

const routes = Router();
const v1Routes = Router();

// User Routes
v1Routes.get('/users/:id', UserController.find);
v1Routes.get('/users', UserController.index);
v1Routes.post('/users', UserValidator, UserController.store);
v1Routes.put('/users/:id', UserValidator, UserController.update);
v1Routes.delete('/users/:id', UserController.delete);

routes.use('/api/v1', v1Routes);

module.exports = routes;