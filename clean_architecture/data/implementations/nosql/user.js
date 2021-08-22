const UserModel = require('../../database/nosql/models/user');

class Users {
  static async findByEmail(email) {
    try {
      const possibleUser = await UserModel.findOne({ email }).exec();
      return possibleUser;
    } catch (error) {
      throw error;
    }
  }

  static async findById(userId) {
    try {
      const possibleUser = await UserModel.findById(userId).exec();
      return possibleUser;
    } catch (error) {
      throw error;
    }
  }

  static async createUser(userDetails) {
    try {
      const createdUser = await UserModel.create(userDetails);
      return createdUser;
    } catch (error) {
      throw error;
    }
  }

  static async updateUser(userId, userDetails) {
    try {
      const updatedUser = await UserModel.updateOne(
        { _id: userId },
        {
          $set: {
            ...userDetails
          }
        }
      );

      return updatedUser;
    } catch (error) {
      throw error;
    }
  }

  static async deleteUser(userId) {
    try {
      const deletedUser = await UserModel.deleteOne({ _id: userId });
      return deletedUser || null;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Users;
