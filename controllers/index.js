
/*
 * GET home page.
 */

var Product = require('../models/product.js');

exports._ = function(req, res){
  // new Product({name: 'Camiseta VANS BOGUE', description: 'Camiseta VANS tamanho M', price: 100, oldPrice: 150}).save();
  // console.log();
  Product.find(function(err,docs){console.log(docs);});
  res.render('index', { title: 'BuyMe..' });
};