const ErrorResponse = require('../../../core/definitions/ErrorResponse');
const generateResponse = require('../helpers/generateResponse');

const {
  CreateUserUC,
  GetSingleUserUC,
  UpdateUserUC,
  DeleteUserUC
} = require('../../../config/useCases');

class User {
  static async createUser(req, res) {
    try {
      // UC stands for: use case
      const { lastName, firstName, email, password } = req.body;
      const response = await CreateUserUC.execute({
        lastName,
        firstName,
        email,
        password
      });

      const { statusCode, responseObject } = response;
      return generateResponse(res, statusCode, responseObject);
    } catch (error) {
      return ErrorResponse.serverError(error.message);
    }
  }

  static async getSingleUser(req, res) {
    try {
      // UC stands for: use case
      const { userId } = req.params;
      const response = await GetSingleUserUC.execute(userId);

      const { statusCode, responseObject } = response;
      return generateResponse(res, statusCode, responseObject);
    } catch (error) {
      return ErrorResponse.serverError(error.message);
    }
  }

  static async updateUser(req, res) {
    try {
      // UC stands for: use case
      const { userId } = req.params;
      const response = await UpdateUserUC.execute(userId, req.body);

      const { statusCode, responseObject } = response;
      return generateResponse(res, statusCode, responseObject);
    } catch (error) {
      return ErrorResponse.serverError(error.message);
    }
  }

  static async deleteUser(req, res) {
    try {
      // UC stands for: use case
      const { userId } = req.params;
      const response = await DeleteUserUC.execute(userId);

      const { statusCode, responseObject } = response;
      return generateResponse(res, statusCode, responseObject);
    } catch (error) {
      return ErrorResponse.serverError(error.message);
    }
  }
}

module.exports = User;
