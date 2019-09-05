'use strict';

const jwt = require('jwt-simple');

const { User } = require('../models');

class sessionController {

  async signin(req, res) {

    try {

      const authSecret = process.env.authSecret;

      const { email, password } = req.body;

      const user = await User.findOne({ where: { email } });

      if ( !(await user.checkPassword(password)) ) throw new Error('the password does not match!'); 

      const payload = {
        id: user.id,
        name: user.name,
        email: user.email
      }

      res.status(200).json({
        ...payload,
        token: jwt.encode(payload, authSecret)
      });

    } catch (error) {
      res.status(401).json({ message: error.message })
    }
  }
  
}

module.exports = new sessionController();