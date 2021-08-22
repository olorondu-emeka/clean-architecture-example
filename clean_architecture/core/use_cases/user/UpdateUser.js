const SuccessResponse = require('../../definitions/SuccessResponse');
const ErrorResponse = require('../../definitions/ErrorResponse');

class UpdateUser {
  constructor(userRepo) {
    this.userRepo = userRepo;
  }

  async execute(userId, userDetails) {
    try {
      if (!userId) return ErrorResponse.badRequest('userId is required');

      const possibleUser = await this.userRepo.findById(userId);
      if (!possibleUser) return ErrorResponse.notFound('user does not exist');

      const updatedUser = await this.userRepo.updateUser(userId, userDetails);

      return SuccessResponse.ok('user updated successfully', updatedUser);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

module.exports = UpdateUser;
