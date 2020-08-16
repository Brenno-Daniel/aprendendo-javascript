// sem promise..
const http = require('http')

const getTurma = (letra, callback) => {
    /* Urls para consulta dos dados:
    http://files.cod3r.com.br/curso-js/turmaA.json
    http://files.cod3r.com.br/curso-js/turmaB.json
    http://files.cod3r.com.br/curso-js/turmaC.json */
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    http.get(url,res => {
        let resultado = ''

        res.on('data', dados => {
            resultado += dados
        })

        res.on('end', () => {
            // chamar a função callback e aplicar um parse no JSON para obter o resultado num obj
            callback(JSON.parse(resultado))
        })
    })
}

let nomes = []

// aqui caímos no cenário de callback hell, uma callback dentro da outra
getTurma('A', alunos => {
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
    getTurma('B', alunos => {
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
        getTurma('C', alunos => {
            nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
            console.log(nomes)
        })
    })
})


