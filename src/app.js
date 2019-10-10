const express = require('express')
const app = express()

//rotas
const index = require('./routes/index')
const alunas = require ('./routes/alunasRoute')

app.all('*', function(request, response, next){ 
    //tecnicamente o all serve pra mostrar nossa api sendo consumida
    //o next serve para pular para a próxima função, mostrar requisição
    console.log("passamos no app")
    next()
})

app.use('/', index)
app.use("/alunas", alunas)

module.exports = app