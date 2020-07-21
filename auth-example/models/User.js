var mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  Name: { type: String, require: true },
  email: { type: String, require: true },
  hashedPassword: { type: String, require: true }

})



module.exports = mongoose.model('User', userSchema)