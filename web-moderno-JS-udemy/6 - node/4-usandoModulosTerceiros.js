// geralmente se usa o _ para se referir ao lodash
const _ = require('lodash')
setInterval(() => console.log(_.random(0, 1000)), 2000)

// Instalando o nodemon globalmente (-g)
// E executando o arquivo via terminal: nodemon <arquivos.js>
// temos como desenvolver usando live-reload, ao alterar o código e salvar o nodemon atualiza a execução do código