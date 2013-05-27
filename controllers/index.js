
/*
 * GET home page.
 */

var pagination = require('pagination');
// var Product = require('../models/product.js');

exports._ = function(req, res){
  // new Product({name: 'Camiseta VANS BOGUE', description: 'Camiseta VANS tamanho M', price: 100, oldPrice: 150}).save();
  // console.log();
  // Product.find(function(err,docs){
  //   res.render('index', docs[0]);
  // });

  var paginator = new pagination.SearchPaginator({prelink:'/', current: 1, rowsPerPage: 10, totalResult: 30});

  var response = {
    response: {name:'CAMISETA VANS BOGUE', description: 'CAMISETA VANS BOGUE DESC', price: '100', oldPrice: '150'},
    pagination: paginator.render()
  }

  res.render('index', response);
};