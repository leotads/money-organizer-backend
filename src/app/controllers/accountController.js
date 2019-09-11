'use strict';

const { Account } = require('../models');

class accountController {
  async save(req, res) {
  
    try {
      
      const userId = req.idUser.id;
      const { name } = req.body;
  
      if (!name) throw new Error('Name not found!');

      const account = await Account.create({ name, userId });

      res.status(200).send(account);
    } catch(err) {
      res.status(400).json({ errorMessage: err.message })
    }

  }
}

module.exports = new accountController();