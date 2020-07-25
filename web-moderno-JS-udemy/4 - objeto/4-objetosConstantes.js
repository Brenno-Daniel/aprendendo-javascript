// pessoa aponta para endereço de memória "123"
// nesse endereço "123" de fato tenho o objeto criado
// pessoa -> 123 -> {...}
const pessoa = { nome: 'Joao' }

// não mudei a referencia da constante, continua apontando para "123"
// mas o dado, o objeto que esta na referencia "123" pode ser alterado, como no exemplo abaixo
pessoa.nome = 'Pedro'
console.log(pessoa)

// No exemplo abaixo estamos tentando que a variavel pessoa aponte para outro endereço de memória
// mas como pessoa é uma constante, só podemos fazer uma atribuição uma única vez para uma constante
// por isso o código abaixo irá gerar erro
// pessoa <- "456" -> {...}
// pessoa = { nome: 'Ana' }


// Freeze, método de Object que podemos congelar um objeto
// uma vez que o objeto esta congelado não conseguimos mais mexer no objeto
// passamos a ter um objeto constante assim
Object.freeze(pessoa)

// ao alterar o nome novamente, por conta do freeze, o nome não será alterado
// continuará sendo 'Pedro'
pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC' // não é possível adicionar dados ao objeto por conta do freeze
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

// Outra forma de construir objeto constante
const pessoaConstante = Object.freeze({ nome: 'João' })
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)
