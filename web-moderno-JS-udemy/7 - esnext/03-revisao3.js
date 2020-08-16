// ES8: Object.values/Object.entries
const obj = { a: 1, b: 2, c: 3 }
console.log(Object.values(obj)) // retorna uma matriz
console.log(Object.entries(obj)) // retorna um "array de arrays"

// Melhorias na Notação Literal
const nome = 'Carla'
const pessoa = {
    // pega o valor da variável sem precisar declarar nome: nome
    nome,
    // criar função de forma mais simples
    ola() {
        return 'Oi gente!'
    }
}

console.log(pessoa.nome, pessoa.ola())

// Class
class Animal {}
// aplicar herança em classe pelo extends
class Cachorro extends Animal {
    falar() {
        return 'Au au!'
    }
}

dog1 = new Cachorro()
console.log(dog1.falar())
