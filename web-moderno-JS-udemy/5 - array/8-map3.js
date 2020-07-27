// Implementando nosso próprio map()


Array.prototype.map2 = function(callback) {
    const newArray = [] // criando novo array, para que o retorno da função venha nele
    // percorrendo o array original usando o this 
    for (let i = 0; i < this.length; i++) {
        // dentro de cada iteração, chamando a callback passando o elemento atual, o indice e o array original
        // e o resultado da callback colocando dentro do novo array (para não mexer no original)
        newArray.push(callback(this[i], i, this))
    }
    // retorno da função será o novo array, evitando alteração no array original
    return newArray
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de lápis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

// Retornar um array apenas com os preços

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultadoPreco = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultadoPreco)
