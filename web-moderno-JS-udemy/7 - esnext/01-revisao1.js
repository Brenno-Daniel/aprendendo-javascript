// let e const
{
    var a = 2
    let b = 3
    console.log(b)
}
console.log(a)
// console.log(b) // variável let só esta presente dentro do escopo

// Template String
const produto = 'iPad'
console.log(`${produto} é caro!`)

// Destructuring
const [l, e, ...tras] = "Cod3r" // desestruturar string
console.log(l, e, tras)

const [x, y] = [1, 2, 3] // desestruturar arrays
console.log(x, y)

const { idade: i, nome } = { nome: 'Ana', idade: 9 } // desestruturar objetos
console.log(i, nome)