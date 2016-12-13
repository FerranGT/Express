const express = require('express')
const bodyparser = require('body-parser')
const moment = require('moment');
const app = express()
const PORT = 3000;

let tasks = [
	{
		desc: 'Flight tickets to Canada',
		done: false
	},
	{
		desc: 'Buy gold',
		done: false
	}
]

app.set('view engine', 'pug')
app.use( express.static('public') )
app.use( bodyparser.urlencoded({ extended: false }) )

app.get('/', (req,res) => {
	const title = "TODO Tasks"
	res.render('index', { title, tasks } )
})

app.get('/tasks', (req,res) => {
	res.json(tasks)
})

// curl --request POST 'http://localhost:3000/task' --data 'desc=My new task'
app.post('/task', (req,res) => {
	var newTask = req.body;
	newTask.done = false;
	newTask.date = moment().format("MMMM Do YYYY, h:mm:ss a");
	console.log = (newTask.date);
	tasks.push(newTask);
	res.redirect('/');
})

// curl --request DELETE 'http://localhost:3000/task/2'
app.delete('/task/:id', (req,res) => {
	const id = +req.params.id;
	tasks.splice(id,1)
	console.log(tasks)
	res.sendStatus(200)
})


app.put('/tasks:id', (req,res) => {
	const id = +req.params.id;
	tasks[id].done = true;
})


app.listen(PORT, () => console.log(`Listening on port ${PORT}...`) )