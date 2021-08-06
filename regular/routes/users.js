const express = require('express');
const UserController = require('../controllers/users');

const route = express.Router();

route.post('/', UserController.create);
route.get('/', UserController.findAll);

module.exports = route;
