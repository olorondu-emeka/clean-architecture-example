const database = require('./index');

class User {
  constructor() {
    this.db = database.getDB();
    this.index = 0;
  }

  static create(inputFields) {
    this.index += 1;
    this.db[index] = inputFields;
  }

  static findAll() {
    return Object.values(this.db);
  }

  static findByEmail(email) {
    let found = false;
    let possibleUser = null;

    Object.values(this.db).forEach(user => {
      if(user.email === email) {
        found = true;
        possibleUser = user;
        break;
      }
    });

    return possibleUser;
  }

  static findById(id){
    return this.db[id];
  }

  static update(id, inputFields) {
    this.db[id] = { ...this.db[id], ...inputFields };
  }

  static delete(id) {
    delete this.db[id];
  }
}

module.exports = User;
