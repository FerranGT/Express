var express = require('express')
var fs = require('fs')
var port = process.argv[2] || 3000;
var filename = process.argv[3];
var books;

var app = express();

app.get('/books', function(req, res){
	fs.readFile( filename, function(error, data){
		if(error) return res.sendStatus(500)
		try {
			books = JSON.parse(data);
		}
		catch(e) {
			res.sendStatus(500);
		}
		res.json(books)
	})
});

app.listen(port)