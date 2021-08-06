const UserModel = require('../database/users');

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
}
