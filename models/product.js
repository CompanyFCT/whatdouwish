var mongoose = require('mongoose');
module.exports = mongoose.model('Product', new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  oldPrice: Number
}));