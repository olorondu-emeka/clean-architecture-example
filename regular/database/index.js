let database = {};

module.exports = {
  getDB: () => {
    if (!database) {
      database = {};
    }
    return database;
  }
};
