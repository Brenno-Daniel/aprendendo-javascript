const fs = require('fs')

// ************ Meu código:

// __dirname = variável do node que se refere ao diretório atual
// const caminho = __dirname + '/dados.txt'

// síncrono
// const conteudo = fs.readFileSync(caminho, 'utf-8')
// console.log(conteudo)

// new Promise(function(resolve) {
//     const conteudo = fs.readFileSync(caminho, 'utf-8')
//     resolve(conteudo)
// }).then(console.log)


// ************ Código da aula:
const path = require('path')

function lerArquivo(caminho) {
    return new Promise(resolve => {
        fs.readFile(caminho, function(err, conteudo) {
            resolve(conteudo.toString())
        })
    })
}

const caminho = path.join(__dirname, 'dados.txt')

lerArquivo(caminho)
    .then(conteudo => conteudo.split('\n')) // quebrando as linhas do arquivo em array, cada linha um elemento do array
    .then(linhas => linhas.join(',')) // jutando cada um separado por vírgula
    .then(conteudo => `O valor final é: ${conteudo}`)
    .then(console.log)
