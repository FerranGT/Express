var express = require('express')
var path = require("path")
var fs = require('fs')
var port = process.argv[2] || 3000;
//var filename = process.argv[3];
var filePath = path.join(__dirname,"data/students.json");

var app = express();

app.use(express.static('public'));

app.get('/data', function(req, res){

	fs.readFile(filePath, function(error, data){
		if(error) return res.sendStatus(500)
		try {
			var file = JSON.parse(data);
		}
		catch(e) {
			res.sendStatus(500);
		}
		res.json(file)
	})
});

app.listen(port)