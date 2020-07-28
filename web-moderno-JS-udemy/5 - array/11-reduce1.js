/* Reduce é uma função que serve para, por exemplo, transformar um array em algum outro elemento, 
em um obj, em outro array, em string, etc.

Possui um parametro que vai sendo acumulado de chamada em chamada.

O resultado da função reduce é passado sempre para a proxima iteração.

Você tem o elemento atual e no primeiro parametro tem o acumulador, que é o valor passado como 
resposta da função anterior para a proxima função.
O primeiro reduce recebe os primeiros elementos do array, o elemento de indice 0 (o acumulador) 
e o de indice 1 (elemento atual).
*/ 

const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

console.log(alunos.map(a => a.nota)) // exibir o array das notas

// Exemplo do reduce:
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
})

console.log('Resultado: ', resultado)

// Se quisermos passar o valor inicial, temos de passar após o callback
const resultado2 = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}, 10) // passar o valor inicial após a callback

console.log('Resultado: ', resultado2)
