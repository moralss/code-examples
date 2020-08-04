var jwt = require('jsonwebtoken');

const createToken = (userId, email) => {
  const expiresIn = 4;
  var now = new Date();
  // + expiresIn * 1000
  expiryDate = now.getTime()
  var token = jwt.sign({ userId, email, expireDate: expiryDate }, process.env.TOKEN_SECRET);
  return token
}

module.exports = { createToken }