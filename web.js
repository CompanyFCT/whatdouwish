//FIXME 1: IMPLEMENTS MONGOOSE + MELHORAR ROTAS SE NECESSARIO + FAZER LOGIN COM FACE.
//FIXME 2: SEE ASYNC LIB
//FIXME 3: GENERAL ERROR HANDLER

/**
 * Module dependencies.
 */

var express = require('express')
  , mongoose = require('mongoose')
  , routes = require('./controllers/routes')
  , locals = require('./base/locals').setLocals
  , path = require('path')
  , less = require('less-middleware');

var app = express();



// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.set('facebook', {name: 'BuyMe', app_id: '516291248419238', app_secret_id: '40d466313102965fddb33b8ca44b6f9c'});
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(locals);
app.use(app.router);  
app.use(require('less-middleware')({ src: __dirname + '/public' }));
app.use(express.static(path.join(__dirname, 'public')));


//mappging routes
app.get('/', routes.index._);
// app.get('/users', routes.user.list);
app.post('/', routes.index._);

//mongodb
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
  mongoose.connect('mongodb://localhost/buyme');
} 
else if ('production' == app.get('env')) {
  mongoose.connect('mongodb://heroku_app15611687@ds029328.mongolab.com:29328/heroku_app15611687');
} 



// server listening
app.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

