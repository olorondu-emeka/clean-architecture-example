const db = require('../../database/sql/config/knex');
const tableNames = require('../../database/sql/config/tableNames');

const { USERS_TABLE } = tableNames;

class Users {
  static async findByEmail(email) {
    try {
      const possibleUser = await db(USERS_TABLE).where('email', email).first();
      return possibleUser;
    } catch (error) {
      throw error;
    }
  }

  static async findById(userId) {
    try {
      const possibleUser = await db(USERS_TABLE).where('id', userId).first();
      return possibleUser;
    } catch (error) {
      throw error;
    }
  }

  static async createUser(userDetails) {
    try {
      await db(USERS_TABLE).insert(userDetails);
      const createdUser = await db(USERS_TABLE)
        .where('email', userDetails.email)
        .first();
      return createdUser;
    } catch (error) {
      throw error;
    }
  }

  static async updateUser(userId, userDetails) {
    try {
      const updatedUser = await db(USERS_TABLE)
        .where('id', userId)
        .update(userDetails);
      return updatedUser;
    } catch (error) {
      throw error;
    }
  }

  static async deleteUser(userId) {
    try {
      const deletedUser = await db(USERS_TABLE).where('id', userId).del();
      return deletedUser;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Users;
