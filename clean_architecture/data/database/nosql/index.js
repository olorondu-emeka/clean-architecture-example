const mongoose = require('mongoose');

class MongoDB {
  constructor(connectionString) {
    this.connectionString = connectionString;

    mongoose.set('useCreateIndex', true);
    mongoose.set('useNewUrlParser', true);

    // mongoose.set('useFindAndModify', false);
    // mongoose.set('useUnifiedTopology', true);

    return mongoose.connect(this.connectionString);
  }
}

module.exports = MongoDB;
