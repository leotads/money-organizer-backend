'use strict';

const routes = require('express').Router();

const UserController = require('./app/controllers/userController');
const SessionController = require('./app/controllers/sessionController');

routes.get ('/', (req, res) => {
  res.status(200).json({ hello: "world Teste"})
});

routes.post('/signin', SessionController.signin);

routes.post('/users', UserController.save);
routes.get('/user', UserController.getUser);

module.exports = routes;