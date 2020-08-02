const fs = require('fs')

// __dirname = variável do node que se refere ao diretório atual
const caminho = __dirname + '/arquivo.json'

// Sincrono...
// não é muito recomendado pois irá travar o EventLoop do Node até que o arquivo seja lido
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// Assincrono...
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

// neste caso usando somente o require conseguimos acesso ao config e não precisamos usar o JSON.parse()
const config = require('./arquivo.json')
console.log(config.db)

// leitura de diretório
// irá ler o diretório e passar como resposta na callback todos os arquivos do diretório
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})
