
/*
 * GET home page.
 */

var Product = require('../models/product.js');

exports._ = function(req, res){
  Product.find(function(err,docs){
    console.log(docs);

    var json = null;
    if(docs.length==0){
      console.log('save');
      json = {name: 'Camiseta VANS BOGUE', description: 'Camiseta VANS tamanho M', price: 100, oldPrice: 150};
      new Product(json).save(function (err) {if (err) console.log ('Error on save!' + err)});
    }else{
      console.log('find');
      json = docs[0];
    }

    var response = { response: json };
    res.render('index', response);
  });

  // var response = { response: json };
  // res.render('index', response);
};