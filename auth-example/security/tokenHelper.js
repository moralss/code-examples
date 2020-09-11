var jwt = require('jsonwebtoken');
require('dotenv').config();


const createToken = (userId, email) => {
  const expiresIn = 4;
  var now = new Date();
  expiryDate = now.getTime()
  var token = jwt.sign({ userId, email, expireDate: expiryDate }, process.env.TOKEN_SECRET);
  return token
}


const verifyToken = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    jwt.verify(token, process.env.TOKEN_SECRET)
    next()
  } catch (e) {
    return res.send(401)
  }

}


module.exports = { createToken, verifyToken }