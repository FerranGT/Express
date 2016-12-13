const express = require('express');
const PORT = process.argv[2];
const bodyParser = require('body-parser')

const fs = require('fs')

let app = express();

app.use( express.static('public') )
app.set('view engine', 'pug');

app.use( bodyParser.json() ); // support json encoded bodies
app.use( bodyParser.urlencoded({ extended: true }) ); // support encoded bodies

app.get('/', (req,res) => {
	res.render('index', {
		title: 'Hey',
		message: 'Hello there!'
	})
})

app.get('/about', (req,res) => {
	res.render('about')
})

// -----------------------------------

app.get('/contact', (req,res) => {
	res.render('contact')
})

app.post('/contact', (req,res) => {

	//fs.writeFile
	const { username, password } = req.body;
	const str = `${username}:${password}\n`;

	fs.appendFile('output.txt', str , (err) => {
		res.send( "user data has been succesfully added..." )
	})

})

// -----------------------------------

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}...`)
})