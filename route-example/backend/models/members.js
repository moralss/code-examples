const mongoose = require('mongoose')

const MembersSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  hashedPassword: { type: String, required: true }
})

var Member = mongoose.model('Member', MembersSchema)

module.exports = Member








