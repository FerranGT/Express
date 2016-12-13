var express = require('express')
var app = express()

var myLogger = function (req, res, next) {
  console.log('LOGGED')
  next()
}

var myLogger2 = function (req, res, next) {
  console.log('LOGGED2')
  next()
}

app.use(myLogger)
app.use(myLogger2)

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/about', function (req, res) {
  res.send('About!')
})

app.listen(3000)