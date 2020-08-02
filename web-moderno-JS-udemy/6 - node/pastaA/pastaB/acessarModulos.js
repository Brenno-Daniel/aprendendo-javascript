const moduloA = require('../../1-moduloA')
console.log(moduloA.ola)

// criando uma pasta dentro de node_modules e importando
const saudacao = require('saudacao')
console.log(saudacao.ola)


// por estar usando o padrão index na pasta C, 
// podemos referenciar somente o nome da pasta quando for importar
const c = require('./pastaC')
console.log(c.ola2)


// também podemos importar os módulos core do node
// neste exemplo com o módulo http
const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080)
// acessar em: http://localhost:8080
