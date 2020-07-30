const alunos = [
    { nome: 'João', nota: 7.9 },
    { nome: 'Maria', nota: 9.2 }
]

// Imperativo
let total1 = 0
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

// Declarativo
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)

/*
Exemplo de código SQL:

select codigo, nome, email from clientes where ativo = 1

SQL é uma linguagem declarativa, pois não precisamos nos importar em como ela irá fazer para obter
os dados que precisamos, apenas passamos os parÂmetros e dados que precisamos e a liguagem fará o 
resto "por de baixo dos panos".
*/
