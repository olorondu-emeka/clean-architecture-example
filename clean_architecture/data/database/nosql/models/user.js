const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserClass = require('../../../../core/entities/User');

const userSchema = new Schema({
  lastName: {
    type: String,
    required: true,
    lowercase: true
  },
  firstName: {
    type: String,
    required: true,
    lowercase: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  }
});

userSchema.loadClass(UserClass);

module.exports = mongoose.model('User', userSchema);
