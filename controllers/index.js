
/*
 * GET home page.
 */

// var Product = require('../models/product.js');
var pagination = require('pagination');

exports._ = function(req, res){
  // new Product({name: 'Camiseta VANS BOGUE', description: 'Camiseta VANS tamanho M', price: 100, oldPrice: 150}).save();
  // console.log();
  // Product.find(function(err,docs){
  //   res.render('index', docs[0]);
  // });

  res.render('index', {name:'CAMISETA VANS BOGUE', description: 'CAMISETA VANS BOGUE DESC', price: '100', oldPrice: '150'});
};