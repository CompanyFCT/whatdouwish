var redis=null;

if (process.env.REDISTOGO_URL) {
  var rtg   = require("url").parse(process.env.REDISTOGO_URL);
  redis = require("redis").createClient(rtg.port, rtg.hostname);
  redis.auth(rtg.auth.split(":")[1]); 
} else {
  redis = require("redis").createClient();
}

exports._ = function(req, res){
  redis.get("logged", function (err, val) {
    if(val==null){
      res.render('admin/index');
    }else{
      res.render('admin/index',{logged: true});
    }
  });
};

exports.login = function(req, res){
  if(req.body.user=='admin' && req.body.pass=='123456'){
    redis.set("logged", true);
    res.send({});
  }else{
    res.send({status:404});
  }
};

exports.logout = function(req, res){
  redis.del("logged");
  res.redirect('/admin');
};

