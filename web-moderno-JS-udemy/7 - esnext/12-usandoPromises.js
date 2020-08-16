// com promise..
const http = require('http')

/* Urls para consulta dos dados:
    http://files.cod3r.com.br/curso-js/turmaA.json
    http://files.cod3r.com.br/curso-js/turmaB.json
    http://files.cod3r.com.br/curso-js/turmaC.json */
    
const getTurma = letra => {

    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url,res => {
            let resultado = ''
    
            res.on('data', dados => {
                resultado += dados
            })
    
            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch (error) {
                    reject(error)
                }
            })
        })
    })
}

let nomes = []

// aqui caímos no cenário de callback hell, uma callback dentro da outra
// getTurma('A').then(alunos => {
//     nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
//     getTurma('B').then(alunos => {
//         nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
//         getTurma('C').then(alunos => {
//             nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
//             console.log(nomes)
//         })
//     })
// })



// Utilizando o promise.all passando um array de funções que retornam promises,
// o promise.all fica esperando as promises serem resolvidas ou rejeitadas,
// e ao final chama a função then com todos os dados já populados dentro de uma matriz.
Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    //.then(x => console.log(x)) // retorna uma matriz com 3 arrays das 3 turmas
    .then(turmas => [].concat(...turmas)) // concatenar os 3 arrays das 3 turmas em um só usando o Spread Operator
    .then(alunos => alunos.map(aluno => aluno.nome)) // criando array de alunos e filtrando os nomes
    .then(nomes => console.log(nomes))
    .catch(e => console.log(e.message)) // importante sempre ter o catch para tratar erros quando trabalhamos com promises

getTurma('D').catch(e => console.log(e.message)) // fornçando erro para ser pego pela função catch
