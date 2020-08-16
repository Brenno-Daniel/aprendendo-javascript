// let p = new Promise(function(cumprirPromessa) {
//     // cumprirPromessa(3)
//     // cumprirPromessa({ x: 1, y: 5 })
//     cumprirPromessa(['Ana', 'Bia', 'Carlos', 'Daniel'])
// })

// // console.log(typeof p) // retorna um obj

// p.then(function(valor) {
//     console.log(valor)
// })

const primeiroElemento = arrayOuString => arrayOuString[0]
const letraMinuscula = letra => letra.toLowerCase()

new Promise(function(resolve) {
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})
    .then(primeiroElemento)
    .then(primeiroElemento)
    .then(letraMinuscula)
    .then(console.log) // console.log irá printar o próprio valor passado para ele, no caso o valor da função letraMinuscula
    
