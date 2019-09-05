'user strict';

const { User } = require('../models');

class userController {
  async save(req, res) {
    try {
      const { name, email, password } = req.body;

      if (!name || !email || !password) throw new Error('not all fields entered!');

      const user = await User.create({ name, email, password });

      res.status(200).json(user);
    } catch(err) {
      res.status(400).json({message: err.message})
    }
  }

  async getUser(req, res) {
    try {

      const { id } = req.body;

      const user = await User.findByPk(id);

      res.status(200).json(user)
    
    } catch(err) {
      res.status(400).json({message: err.message})
    }
  }
}

module.exports = new userController();