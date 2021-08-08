const express = require('express');
const UserController = require('../controllers/users');

const route = express.Router();

route.post('/', UserController.create);
route.get('/', UserController.findAllOrOne);
route.get('/:id', UserController.findAllOrOne);
route.put('/:id', UserController.update);
route.delete('/:id', UserController.delete);

module.exports = route;
