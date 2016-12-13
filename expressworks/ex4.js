var express = require('express')
var app = express()
var PORT = process.argv[2]

var bodyparser = require('body-parser')
app.use( bodyparser.urlencoded({extended: false}) )

app.post('/form', function(req, res){
	const dataFromForm = req.body.str;
	const str = dataFromForm.split('').reverse().join('');
	res.send(str)
})

app.listen(PORT, ()=> {
	console.log(`Listening on port ${PORT}`)
})