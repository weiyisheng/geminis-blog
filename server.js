var express = require('express')
var compression = require('compression')
var path = require('path')

var APP_PORT = 3000
var app = express()

app.set('views', path.join(__dirname, 'public', 'dist', 'views'))
app.set('view engine', 'ejs')

app.use(express.static(path.resolve(__dirname, 'public')))

app.use(compression())


app.use("/login", function(req, res, next) {
  res.render('login', {})
})

app.use("/", function(req, res, next) {
  res.render('index', {})
})

app.listen(APP_PORT, () => {
  console.log(`App is now running on http://localhost:${APP_PORT}`)
})
