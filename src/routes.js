'use strict';

const routes = require('express').Router();
const utils = require('./utils/returnUserParams');

const UserController = require('./app/controllers/userController');
const SessionController = require('./app/controllers/sessionController');
const AccountController = require('./app/controllers/accountController');

routes.get ('/', (req, res) => {
  res.status(200).json({ hello: "world Teste"})
});

routes.post('/signin', SessionController.signin);

routes.post('/users', UserController.save);
routes.get('/user', UserController.getUser);

routes.post('/account', utils.returnUserParams, AccountController.save)

module.exports = routes;