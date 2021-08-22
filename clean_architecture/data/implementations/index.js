const dotenv = require('dotenv');
const appPath = require('app-root-path');

const UserRepo_sql = require('../implementations/sql/user');
const UserRepo_nosql = require('../implementations/nosql/user');

dotenv.config({ path: `${appPath}/.env` });

const sqlRepos = {
  UserRepo: UserRepo_sql
};

const nosqlRepos = {
  UserRepo: UserRepo_nosql
};

const dbType = process.env.DB_TYPE || 'sql';
let finalRepositories = null;

switch (dbType) {
  case 'sql':
    finalRepositories = sqlRepos;
    break;
  case 'nosql':
    finalRepositories = nosqlRepos;
    break;
  default:
    finalRepositories = sqlRepos;
    break;
}

module.exports = finalRepositories;
