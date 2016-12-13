var express = require('express')
var crypto = require('crypto');

var port = process.argv[2] || 3000;

var app = express();

// curl -X PUT -d arg=val -d arg2=val2 localhost:3000/message/12345
app.put('/message/:ID', (req, res) => {
	const id = req.params.ID;
	const hash = crypto.createHash('sha1')
		.update(new Date().toDateString() + id)
		.digest('hex');

	res.send(hash)
})

app.listen(port, () => console.log(`Listening on ${port}...`))