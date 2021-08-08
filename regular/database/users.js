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

  findByEmail(email) {
    let found = false;
    let possibleUser = null;

    Object.values(this.db).forEach((user) => {
      if (user.email === email) {
        found = true;
        possibleUser = user;
        return;
      }
    });

    return possibleUser;
  }

  findById(id) {
    return this.db[id];
  }

  update(id, inputFields) {
    this.db[id] = { ...this.db[id], ...inputFields };
  }

  delete(id) {
    delete this.db[id];
  }
}

module.exports = User;
