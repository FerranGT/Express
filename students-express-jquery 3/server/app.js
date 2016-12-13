const express = require('express')
const fs = require('fs')
const path = require('path')
const bodyParser = require('body-parser')

const dataPath = path.join(__dirname, 'data/students.json')

const app = express();

app.use( express.static('public')  )
app.use( bodyParser.urlencoded({ extended: false }) )

let students = [
  {
      "name": "Alejandro Pavón",
      "mail": "misael04@outlook.es",
      "github": "https://github.com/alejo048"
  },
  {
      "name": "Rubén Ortiz",
      "mail": "ortiz.rbn@gmail.com",
      "github": "https://github.com/rubenortizgarces"
  },
  {
      "name": "Cristina Pujol",
      "mail": "cris.pujol.busquet@gmail.com",
      "github": "https://github.com/CrisPujol"
  },
  {
      "name": "Rubén Sánchez",
      "mail": "rubensc5@gmail.com",
      "github": "https://github.com/rubenscejudo"
  },
          {
      "name": "Manuel Cabrera",
      "mail": "mcabrerapf@gmail.com",
      "github": "https://github.com/mcabrerapf"
  },
  {
      "name": "Daniel Alcaraz",
      "mail": "danielimperium@gmail.com",
      "github": "https://github.com/DanielAlcaraz"
  },
  {
      "name": "Ferran González",
      "mail": "ferrigat0@hotmail.com",
      "github": "https://github.com/FerranGT"
  },
  {
      "name": "Oscar León",
      "mail": "oscar.l.p.7@gmail.com",
      "github": "https://github.com/leonp90"
  },
  {
      "name": "Daniel Muñoz",
      "mail": "damuru88@gmail.com",
      "github": "https://github.com/danivm"
  },
  {
      "name": "Sergio Lucas",
      "mail": "sergioluk@gmail.com",
      "github": "https://github.com/sergiolucaco"
  }
]

app.get('/data', (req,res) => {

	const name = req.query.name;
	const limit = +req.query.limit;

	oFilteredData = students;

	if (name) {
		oFilteredData = oFilteredData.filter( (student) =>  student.name.includes(name) )
	}

	if (limit && (typeof limit === "number") ) {
		oFilteredData = oFilteredData.slice(0, limit)
	}


	res.json( oFilteredData )

})

app.post('/data', (req,res) => {
	const newStudent = req.body;
	students.push(newStudent);
	res.sendStatus(200)
})



app.listen(3000, () =>  console.log("Listening on port 3000...."))
