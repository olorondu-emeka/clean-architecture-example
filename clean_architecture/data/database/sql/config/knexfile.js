const dotenv = require('dotenv');
const appPath = require('app-root-path');

dotenv.config({ path: `${appPath}/.env` });

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: process.env.DEV_HOST,
      database: process.env.DEV_DB,
      user: process.env.DEV_USER,
      password: process.env.DEV_PASSWORD,
      port: process.env.DEV_PORT
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: `${appPath}/clean_architecture/data/database/sql/migrations`
    },
    seeds: {
      directory: `${appPath}/clean_architecture/data/database/sql/seeds`
    }
  }
};
