const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const config = require('config')
const roteador = require('./rotas/fornecedores')

app.use(bodyParser.json())

app.use('/api/fonecedores', roteador)


app.listen(config.get('api.porta'), () => console.log('Selo me dê papai, A API está funcionando!'))