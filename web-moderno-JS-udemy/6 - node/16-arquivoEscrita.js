const fs = require('fs')

const produto = {
    nome: "Celular",
    preco: 1089.99,
    desconto: 0.15
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    // várias coisas em JS podem ser convertidas para true or false
    console.log(err || 'Arquivo salvo!!')
})
