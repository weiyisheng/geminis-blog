var express = require('express');
var compression = require('compression');
var path = require('path');
// var https = require('https');
// var http = require('http');
var fs = require('fs');
var spdy = require('spdy');

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

spdy.createServer(options, app).listen(APP_PORT, () => {
  console.log(`App is now running on https://localhost:${APP_PORT}`)
});

// http.createServer(app).listen(APP_PORT, () => {
//   console.log(`App is now running on http://localhost:${APP_PORT}`)
// });

// app.listen(APP_PORT, () => {
//   console.log(`App is now running on http://localhost:${APP_PORT}`)
// })
