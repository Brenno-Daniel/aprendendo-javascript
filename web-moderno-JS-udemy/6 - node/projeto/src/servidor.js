// configurar o Express que será nosso servidor Web, que será nosso framework Web para criação dos Web Services
const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')


// Middleware body-parser
// para qualquer requisição que faça utilizando o padrão urlencoded, 
// quando a requisição chegar na aplicação será aplicado esse middleware que vai realizar o parser 
// e transformar em obj para acessarmos
app.use(bodyParser.urlencoded({ extended: true }))

// implementando o CRUD

app.get('/produtos', (req, res, next) => {
    // res.send({ nome: 'Notebook', preco: 123.45 }) // método send vai converter para JSON
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // gerar um JSON para enviar para a web
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // gerar um JSON para enviar para a web
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto) // gerar um JSON para enviar para a web
})

app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}.`)
})