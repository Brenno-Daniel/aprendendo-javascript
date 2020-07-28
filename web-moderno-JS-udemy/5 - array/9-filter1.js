// Filter uma função callback que retorna um verdadeiro ou falso
// Se for verdadeiro o array resultante terá o elemento, se for falso não terá o elemento

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

// console.log(produtos.filter(function(p) {
//     return p.preco > 2400 
// }))

// Desafio - filtrar produtos com preço acima ou igual 500 e que são frágeis (frágil == true)
// Meu código#1:
const prodCaro1 = function(p) { return p.preco >= 500 }
const prodFragil1 = function(p) { return p.fragil === true }

const resultado1 = produtos.filter(prodCaro1).filter(prodFragil1)
console.log('Meu código#1: ', resultado1)
 
// Meu código#2 (arrow function):
const prodCaro = preco => preco.preco >= 500
const prodFragil = fragil => fragil.fragil == true
 
const resultado = produtos.filter(prodCaro).filter(prodFragil)
console.log('Meu código#2: ', resultado)

// Código exemplo da aula:
const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil // próprio frágil já retorna um true or false, neste caso não precisa realizar uma comparação

console.log('Código aula: ',produtos.filter(caro).filter(fragil))