// Concat é um método que serve para concatenar arrays
const filhas = ['Valeska', 'Cibalena']
const filhos = ['Uoxiton', 'Uesclei']
const todos = filhas.concat(filhos)
console.log(todos, filhas, filhos)

// Podemos também concatenar novos elementos ao array
// Podemos usar o .concat() diretamente num array literal pois o array literal é um obj em JS
console.log([].concat([1, 2], [3, 4], 5, [[6, 7]]))
