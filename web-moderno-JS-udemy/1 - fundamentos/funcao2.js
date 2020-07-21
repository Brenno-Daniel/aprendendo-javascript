// Armazenando uma funcao em uma variavel
const imprimirSoma = function (a,b) {
    console.log(a +b)
}

imprimirSoma(2, 3)

// Armazenand um funcao arrow em uma variavel
const soma = (a, b) => {
    return a + b
}

console.log(soma(3, 3))

// Retorno implícito
const subtracao = (a, b) => a - b

console.log(subtracao(4, 3))

const imprimir2 = a => console.log(a)
imprimir2('Legal!!!')