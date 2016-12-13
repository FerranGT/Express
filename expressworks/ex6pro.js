var express = require('express')
var path = require('path');
var crypto = require('crypto');

var port = process.argv[2] || 3000;

var app = express();

app.param('ID', function (req, res, next, id) {
  req.hashed_id = getDecryptedId(id);
  next()
})

// app.use( (req, res, next) => {
// 	if ( req.params.ID ) {
// 		req.params.ID
// 	}
// 	next();
// }) 

app.put('/message/:ID', function(req, res){
	var originalId = req.params.id;
	var hashedId = req.hashed_id;
	res.end(req.hashed_id)
});

function getDecryptedId (id) {
	return crypto.createHash('sha1')
		.update(new Date().toDateString() + id)
		.digest('hex')
}

app.listen(port)