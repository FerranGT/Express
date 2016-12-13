const express = require('express');
const PORT = process.argv[2];
const ENVIROMENT = process.env.ENVIROMENT;

let app = express();

app.get('/about', (request,response) => {
	if(ENVIROMENT=="production"){
		console.log(`request recieve`);
		response.send(`You are in about production`)
	}else{
		console.log(`request recieve`);
		response.send(`You are in about development`)
	}
	
})

app.get('/home', (request,response) => {
	if(ENVIROMENT=="production"){
		console.log(`request recieve`);
		response.send(`You are in home production`)
	}else{
		console.log(`request recieve`);
		response.send(`You are in home development`)
	}
	
})

app.get('/contact', (request,response) => {
	if(ENVIROMENT=="production"){
		console.log(`request recieve`);
		response.send(`You are in contact production`)
	}else{
		console.log(`request recieve`);
		response.send(`You are in contact development`)
	}
	
})

app.listen(3000, () => {
	console.log(`Listening on port ${PORT}...`)
})


