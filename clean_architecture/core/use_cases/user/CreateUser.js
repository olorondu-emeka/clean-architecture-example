const SuccessResponse = require('../../definitions/SuccessResponse');
const ErrorResponse = require('../../definitions/ErrorResponse');

class CreateUser {
  constructor(userRepo) {
    this.userRepo = userRepo;
  }

  async execute({ lastName, firstName, email, password }) {
    try {
      console.log('create user use_case');
      // simple validation
      if (!lastName) return ErrorResponse.badRequest('lastName is required');
      if (!firstName) return ErrorResponse.badRequest('firstName is required');
      if (!email) return ErrorResponse.badRequest('email is required');
      if (!password) return ErrorResponse.badRequest('password is required');

      const possibleUser = await this.userRepo.findByEmail(email);

      if (possibleUser) {
        return ErrorResponse.conflict('user already exists');
      }

      // create user
      const createdUser = await this.userRepo.createUser({
        lastName,
        firstName,
        email,
        password
      });

      return SuccessResponse.created('user created successfully', createdUser);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

module.exports = CreateUser;
