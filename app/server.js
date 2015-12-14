var express = require('express'),
    http = require('http'),
    path = require('path'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    errorHandler = require('express-error-handler'),
    morgan = require('morgan'),
    routes = require('./routes'),
    app = express();

app.set('port', process.env.PORT || 3300);

app.use(morgan('dev'));
app.use(bodyParser.json({
  limit: 1024 * 1024 * 10
}));
app.use(bodyParser.urlencoded({
  extended: true,
  parameterLimit: 10000,
  limit: 1024 * 1024 * 10
}));

app.use(session({
  secret: 'keyboard cat',
  cookie: { secure: true },
  resave: false,
  saveUninitialized: false
}));

app.use('/api', express.static(path.join(__dirname, '/../client')));

routes.initialize(app);

var server = http.createServer(app);

if ('development' == app.get('env')) {
	app.use( errorHandler({server: server}) );
}

server.listen(app.get('port'), function() {
    console.log('Server up: http://localhost:' + app.get('port'));
});