const dotenv = require('dotenv');
const appPath = require('app-root-path');
const MongodbConnection = require('../data/database/nosql/index');

dotenv.config({ path: `${appPath}/.env` });

const dbType = process.env.DB_TYPE;
const mongodbUrl = process.env.MONGODB_URL;

function instantiateConnection() {
  if (dbType === 'nosql') {
    return new MongodbConnection(mongodbUrl).then(() => {
      console.log('MongoDB Connection successful');
    });
  }
}

module.exports = instantiateConnection;
