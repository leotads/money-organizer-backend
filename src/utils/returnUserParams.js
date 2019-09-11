const jwt = require('jwt-simple');

const returnUserParams = (req, res, next) => {

  try {
    const authSecret = process.env.authSecret;
    
    if (!req.headers.authorization) throw new Error('Authorization not found!');
    
    const token = req.headers.authorization.split(' ')[1];
    
    req['idUser'] = jwt.decode(token, authSecret);
  } catch(err) {
    res.status(401).json({ error: err.message });
  }
  next();
}

module.exports = {
  returnUserParams
}