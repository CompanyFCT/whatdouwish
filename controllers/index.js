
/*
 * GET home page.
 */

var Product = require('../models/product.js');

exports._ = function(req, res){
  new Product({name: 'Camiseta VANS BOGUE', description: 'Camiseta VANS tamanho M', price: 100, oldPrice: 150}).save();
  console.log();
  res.render('index', {name:'CAMISETA VANS BOGUE', description: 'CAMISETA VANS BOGUE DESC', price: '100', oldPrice: '150'});
  /*Product.find(function(err,docs){
    res.render('index', docs[0]);
  });*/
};