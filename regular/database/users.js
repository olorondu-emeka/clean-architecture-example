const database = require('./index');

class User {
  constructor() {
    this.db = database.getDB();
  }

  static create(inputFields) {
    this.db[inputFields.email] = inputFields;
  }

  static findAll() {
    return Object.values(this.db);
  }

  static findByEmail(email) {
    return this.db[email];
  }

  static update(email, inputFields) {
    let clonedField = { ...this.db[email] };
    this.db[email] = { ...this.db, ...inputFields };
  }

  static delete(id) {
    delete obj1[id];
  }
}

module.exports = User;
