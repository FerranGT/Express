const express = require('express')
const fs = require('fs')
const path = require('path')

const dataPath = path.join(__dirname, 'data/students.json')

const app = express();

app.use ( express.static('public')  )

app.get('/data', (req,res) => {

	const name = req.query.name;
	const limit = +req.query.limit;

	fs.readFile(dataPath, 'utf-8', (err, contentFile) => {

		let oData, oFilteredData;

		if (err) res.sendStatus(500)

		try {
			oData = JSON.parse(contentFile)
		}
		catch(e) {
			res.sendStatus(500);
		}

		oFilteredData = oData;

		if (name) {
			oFilteredData = oFilteredData.filter( (student) =>  student.name.includes(name) )
		}

		if (limit && (typeof limit === "number") ) {
			oFilteredData = oFilteredData.slice(0, limit)
		}


		res.json( oFilteredData )

	})

})

app.listen(3000, () =>  console.log("Listening on port 3000...."))