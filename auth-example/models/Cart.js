var mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  name: { type: String, require: true },
  price: { type: String, require: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', require: true }
})



module.exports = mongoose.model('Cart', cartSchema)