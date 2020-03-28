const { Router } = require('express');

const UserController = require('./controllers/UserController');

const v1Routes = Router();

// User Routes
v1Routes.get('/users/:id', UserController.find);
v1Routes.get('/users', UserController.index);
v1Routes.post('/users', UserController.store);
v1Routes.put('/users/:id', UserController.update);
v1Routes.delete('/users/:id', UserController.delete);

module.exports = v1Routes;