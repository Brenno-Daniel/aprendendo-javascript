// coleção dinânima de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)

// Podemos excluir um atributo de um objeto através do delete
delete produto.preco
delete produto['marca do produto']
console.log(produto)

// Podemos ter objetos dentro de objetos, e arrays também, com seus próprios atributos
// Criação literal de objetos
const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 26
    }],
    // Podemos ter funções também
    calcularValorSeguro: function() {
        // ...
    }
}

// Podemos acessar o atributo a partir da notação ponto, 
// utilizamos essa forma quando já sabemos quais são os atributos do objeto
carro.proprietario.endereco.numero = 1000

// Podemos acessar o atributo também a partir da notação colchetes, a partir de strings
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'
console.log(carro)

// Podemos deletar um objeto e tudo que estiver abaixo dele
delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores)
// cuidado ao tentar acessar propriedade de algo que esta indefinido, pois pode gerar um erro
//console.log(carro.condutores.length)