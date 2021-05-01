const express = require('express')
const routes = require('./routes')
const peopleService = require('./peopleService')
const app = express()
const port = 3000

// poupulate db
peopleService.createPeoples()
.then((_)=>{console.log("Populando banco de dados...");})
.catch((error)=>{console.log(error);});

app.use('/', routes);


app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})