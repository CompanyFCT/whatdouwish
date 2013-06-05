
/*
 * GET home page.
 */

var Product = require('../models/product.js');

exports._ = function(req, res){
  Product.find(function(err,docs){

    var json = null;
    if(docs=='undefined'){
      json = {name: 'Camiseta VANS BOGUE', description: 'Camiseta VANS tamanho M', price: 100, oldPrice: 150};
      new Product(json).save();
    }else{
      json = docs[0];
    }

    var response = { response: json };
    res.render('index', response);
  });

  // var response = { response: json };
  // res.render('index', response);
};