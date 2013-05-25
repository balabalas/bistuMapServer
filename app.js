
/**
 * Module dependencies.
 */

var express = require('express')
  , app = express()
  , routes = require('./routes')
  , http = require('http')
  , path = require('path')
  , server = http.createServer(app)
  , socketio = require('socket.io').listen(server)
  , userId = 0;

// all environments
app.set('port', process.env.PORT || 7887);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);

server.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

socketio.set('log level', 1);

socketio.sockets.on('connection', function(socket){
    socket.emit('id', setId());
    socket.on('update', function(data){
        console.log("callback: " + data.toString());
        socket.broadcast.emit('callback', data);
    });
});

function setId(){
  return userId++;
}

