
/*
 * GET home page.
 */

var Product = require('../models/product.js');

exports._ = function(req, res){
  var json = {name: 'Camiseta VANS BOGUE', description: 'Camiseta VANS tamanho M', price: 100, oldPrice: 150};
  // new Product(json).save();
  // console.log();

  // Product.find(function(err,docs){
  //   console.log(docs);
  //   var response = { response: docs[0] };
  //   res.render('index', response);
  // });

  var response = { response: json };
  res.render('index', response);
};