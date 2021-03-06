const userModel = require('../database/users');
const UserModel = new userModel();

class Users {
  /**
   * @async
   * @param {object} req express request object
   * @param {object} res express response object
   */
  static create(req, res) {
    try {
      const { lastName, firstName, email, password } = req.body;
      if (!lastName || !firstName || !email || !password) {
        return res.status(400).json({ message: 'incomplete input fields' });
      }

      const possibleUser = UserModel.findByEmail(email);
      if (possibleUser) {
        return res.status(409).json({ message: 'user already exists' });
      }

      UserModel.create({ lastName, firstName, email, password });
      return res.status(201).json({ message: 'user created successfully' });
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * @async
   * @param {object} req express request object
   * @param {object} res express response object
   */
  static findAllOrOne(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        const allUsers = UserModel.findAll();
        return res.status(200).json({ users: allUsers });
      }

      const possibleUser = UserModel.findById(id);

      if (!possibleUser) {
        return res.status(404).json({ message: 'user does not exist' });
      }

      return res.status(200).json({ user: possibleUser });
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * @async
   * @param {object} req express request object
   * @param {object} res express response object
   */
  static update(req, res) {
    try {
      const { id } = req.params;

      const possibleUser = UserModel.findById(id);

      if (!possibleUser) {
        return res.status(404).json({ message: 'user does not exist' });
      }

      UserModel.update(id, req.body);
      return res.status(200).json({ message: 'user updated successfully' });
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * @async
   * @param {object} req express request object
   * @param {object} res express response object
   */
  static delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({ message: 'id param is required' });
      }

      const possibleUser = UserModel.findById(id);
      if (!possibleUser) {
        return res.status(404).json({ message: 'user not found' });
      }

      UserModel.delete(id);
      return res.status(200).json({ message: 'user deleted successfully' });
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = Users;
