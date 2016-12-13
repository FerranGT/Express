const express = require('express');
const PORT = process.argv[2];//Tambien lo puedo hacer leyendo variables de entorno
// const PORT = process.env.PORT;
//Crearnos una variable de entorno y hacer que en funcion de su valor hagamos cosas
// const ENVIROMENT = process.env.ENVIROMENT; // Lo ejectumaos asi ENVIROMENT=development node app.js
//if (ENVIROMENT=development) ...

let app = express();

app.get('/about', (request,response) => {
	console.log(`request recieve`);
	response.send(`Hello world!`)
})

app.listen(3000, () => {
	console.log(`Listening on port ${PORT}...`)
})