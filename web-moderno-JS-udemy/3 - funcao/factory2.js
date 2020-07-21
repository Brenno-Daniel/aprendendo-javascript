function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 2199.99))
console.log(criarProduto('iPad', 1199.49))


// Meu exemplo criado antes da aula
/*function criarProduto(nome, preco) {
    return {
        nome: nome,
        preco: preco,
        desconto: 0.1
    }
}

console.log(criarProduto('prod1', 1089))
console.log(criarProduto('prod2', 199))*/