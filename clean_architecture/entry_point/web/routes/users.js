const express = require('express');
const UserController = require('../controllers/user');

const route = express.Router();

route.post('/', UserController.createUser);
route.get('/:id', UserController.getSingleUser);
route.patch('/:id', UserController.updateUser);
route.delete('/:id', UserController.deleteUser);

module.exports = route;
