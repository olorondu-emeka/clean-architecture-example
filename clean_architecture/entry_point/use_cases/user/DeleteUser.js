const SuccessResponse = require('../../definitions/SuccessResponse');
const ErrorResponse = require('../../definitions/ErrorResponse');

class DeleteUser {
  constructor(userRepo) {
    this.userRepo = userRepo;
  }

  async execute(userId) {
    try {
      if (!userId) return ErrorResponse.badRequest('userId is required');

      const possibleUser = await this.userRepo.findById(userId);
      if (!possibleUser) return ErrorResponse.notFound('user does not exist');

      await this.userRepo.deleteUser(userId);

      return SuccessResponse.ok('user deleteded successfully', null);
    } catch (error) {
      return ErrorResponse.serverError(error.message);
    }
  }
}

module.exports = DeleteUser;
