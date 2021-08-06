const database = require('./index');

class User {
  constructor() {
    this.db = database.getDB();
    this.index = 0;
  }

  create(inputFields) {
    this.index += 1;
    this.db[this.index] = inputFields;
  }

  findAll() {
    return Object.values(this.db);
  }

  findOne(id) {
    return this.db[id];
  }

  update(inputFields) {
    this.db = { ...this.db, ...inputFields };
  }

  delete(id) {
    delete obj1[id];
  }
}

module.exports = User;
