var schema = new Schema({
  name: String,
  description: String,
  price: Number,
  oldPrice: Number
});

var Product = mongoose.model('Product', schema);
var product = new Product({ name: 'xxx', description: 'desc', price: 10, oldPrice: 20 });