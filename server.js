var express = require('express');
var compression = require('compression');
var path = require('path');
var http2 = require('spdy');
var fs = require('fs');

var options = {
  key: fs.readFileSync(__dirname + '/keys/server.key'),
  cert: fs.readFileSync(__dirname + '/keys/server.crt')
};

var APP_PORT = 8443;
var app = express();

app.set('views', path.join(__dirname, 'public', 'dist', 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.resolve(__dirname, 'public')));

app.use(compression());


app.use("/login", function(req, res, next) {
  res.render('login', {})
});

app.use("/", function(req, res, next) {
  res.render('index', {})
});

http2.createServer(options, app).listen(APP_PORT, () => {
  console.log(`App is now running on https://localhost:${APP_PORT}`)
});
