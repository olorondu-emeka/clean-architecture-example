const express = require('express');
const UserController = require('../controllers/users');

const route = express.Router();

route.post('/', UserController.create);
route.get('/', UserController.findAllOrOne);
route.put('/', UserController.update);

module.exports = route;
