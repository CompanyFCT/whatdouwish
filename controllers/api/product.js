var Product = require('../../models/product.js');

exports.getProducts = function(req, res){
  Product.find(function(err,docs){
    if(!err){ 
      res.send({ response: docs });
    } else {
      console.log ('Error on get!' + err);
      if(error) res.render('500');
    }
  });
};
