exports.product = function(req, res){
  var response = { response: 'uploaded' };
  res.render('upload', response);
};