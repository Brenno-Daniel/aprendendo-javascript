// Funções importantes de Object
const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

// Keys retorna os valores chave do objeto
console.log(Object.keys(pessoa))
// values retorna os valores do objeto
console.log(Object.values(pessoa))
// entries retorna um array dos registros (chave e valor), do objeto
console.log(Object.entries(pessoa))

// podemos percorrer o array usando o forEach
Object.entries(pessoa).forEach(element => {
    console.log(`${element[0]}: ${element[1]}`)
});
// utilizando o desturcturing, para desestruturar os elementos do objeto juntamente com o entries
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
});

// definir a propriedade de um objeto
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, // se a propriedade vai ser listada
    writable: false, // se aceita ser modificada/ alterada
    value: '25/07/2020' // definindo o valor da propriedade
})

pessoa.dataNascimento = '01/01/2020'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)
// Pega o objeto de destino (objeto que vai receber os atributos)
// e vai pegar todos os atributos dos objetos que passar após o primeiro parâmetro e concatenar no primeiro objeto
// os ultimos elementos vão sobrescrevendo as propriedades dos anteriores, se estiverem com o mesmo nome
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2)

Object.freeze(obj)
// não será possível alterar o valor de C pois congelamos o obj acima
obj.c = 1234
console.log(obj)
