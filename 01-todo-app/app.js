const express = require('express')
const bodyParser = require('body-parser')

const app = express();
app.use( express.static('public')  ) //Esto es un Middleware
app.use( bodyParser.urlencoded({ extended: false }) )

let tasks = [
  {
      "description": "buybu",
      "done": "false"
  },
  {
      "description": "dscd",
      "done": "false"
  },
  {
      "description": "ionion",
      "done": "false"
  }
]


app.get('/data', (req,res) => {

  res.json( tasks )

})

app.post('/data', (req,res) => {
  let newtask = req.body;
  newtask.done = "false"
  //console.log(newtask);
  tasks.push(newtask);
  res.sendStatus(200)
})

app.delete('/data', (req,res) => {
  console.log(req.body)
  const newStudent = req.body
  res.sendStatus(200)
})





app.listen(3000, () =>  console.log("Listening on port 3000...."))