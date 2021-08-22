const dotenv = require('dotenv');
const appPath = require('app-root-path');

dotenv.config({ path: `${appPath}/.env` });

const env = process.env.NODE_ENV;

const knex = require('knex');
const knexFile = require('./knexfile');

const config = knexFile[env];

const db = knex(config);

module.exports = db;
