// Método map() faz um mapeamento do array, invoca a função callback passada por 
// argumento para cada elemento do Arraye devolve um novo Array como resultado

const numbers = [1, 2, 3, 4, 5]

// Basicamente, diferente do forEach, o map() realiza um for com propósito
let resultado = numbers.map(function(num) {
    return num * 2
})

console.log(resultado)

// Podemos utilizar o método map() de forma encadeada
const soma10 = num => num + 10
const triplo = num => num * 3
const paraDinheiro = num => `R$ ${parseFloat(num).toFixed(2).replace('.', ',')}`

// Como o método map() retorna um array, podemos utilizá-lo de forma encadeada:
resultado = numbers.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)

