const express = require('express');
const PORT = process.argv[2];

let app = express();

function step1 (req, res, next) {
	var { username } = req.params;

	if ( hasAccess(username) ) {
		next();
	}
	else {
		res.send("You don't have access to this page....")
	}

}

function step2 (req, res) {
	console.log("Welcome to your secret data!");
}

app.get('/mySecretPage/:username', step1, step2)

app.get('/users/:userId/books/:bookId', (req, res) => {
  res.send(req.params)
})

app.use( express.static('public') )

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}...`)
})