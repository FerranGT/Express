const express = require('express');
const PORT = process.argv[2];

let app = express();

app.use( express.static('public') )
app.set('view engine', 'pug');

app.get('/', (req,res) => {
	res.render('index', {
		title: 'Hey',
		message: 'Hello there!'
	})
})

app.get('/about', (req,res) => {
	var { user } = req.query
	res.render('about', { user })
})


app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}...`)
})