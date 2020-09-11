const bcrypt = require('bcrypt');

const hashPassword = async (password) => {
  var saltRounds = 10
  try {
    const salt = await bcrypt.genSalt(saltRounds)
    const hashedPassword = await bcrypt.hash(password, salt)
    return hashedPassword
  } catch (e) {
    return e
  }
}



module.exports = { hashPassword }