var jwt = require('jsonwebtoken');

const createToken = (userId, email) => {
  date = new Date()
  var token = jwt.sign({ userId, email, lat: date }, process.env.TOKEN_SECRET);
  return token
}

module.exports = { createToken }