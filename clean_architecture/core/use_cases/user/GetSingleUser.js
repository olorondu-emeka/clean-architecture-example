const SuccessResponse = require('../../definitions/SuccessResponse');
const ErrorResponse = require('../../definitions/ErrorResponse');

class GetSingleUser {
  constructor(userRepo) {
    this.userRepo = userRepo;
  }

  async execute(userId) {
    try {
      if (!userId) return ErrorResponse.badRequest('userId is required');

      const possibleUser = await this.userRepo.findById(userId);
      if (!possibleUser) return ErrorResponse.notFound('user does not exist');

      return SuccessResponse.ok('user retrieved successfully', possibleUser);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = GetSingleUser;
