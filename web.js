//FIXME 1: IMPLEMENTS MONGOOSE + MELHORAR ROTAS SE NECESSARIO + FAZER LOGIN COM FACE.
//FIXME 2: SEE ASYNC LIB
//FIXME 3: GENERAL ERROR HANDLER

/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , locals = require('./base/locals').setLocals
  , path = require('path');

var app = express();



// all environments

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.set('facebook', {name: 'BuyMe', app_id: '516291248419238', app_secret_id: '40d466313102965fddb33b8ca44b6f9c'});

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(locals);
app.use(app.router);
app.use(require('stylus').middleware(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public')));


// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.post('/', routes.index);
app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
