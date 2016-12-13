const express = require('express')
const fs = require('fs')
const path = require('path')

const dataPath = path.join(__dirname, 'data/students.json')

const app = express();

app.use ( express.static('public')  )

app.get('/data', (req,res) => {

	fs.readFile(dataPath, 'utf-8', (err, contentFile) => {

		let oData;

		if (err) res.sendStatus(500)

		try {
			oData = JSON.parse(contentFile)
		}
		catch(e) {
			res.sendStatus(500);
		}

		res.json(oData)

	})

})

app.listen(3000)