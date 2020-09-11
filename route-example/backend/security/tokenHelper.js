var jwt = require('jsonwebtoken');

const createToken = (userId, email) => {
  var now = new Date();
  expiryDate = now.getTime()
  var token = jwt.sign({ userId, email, expireDate: expiryDate }, process.env.TOKEN_SECRET);
  return token
}


module.exports = { createToken }

