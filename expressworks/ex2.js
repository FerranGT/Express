var express = require('express')
var app = express()
var PORT = process.argv[2]
var pathArg = process.argv[3]

app.use(express.static(pathArg || pathArg.join(__dirname, 'public')))

app.listen(PORT)