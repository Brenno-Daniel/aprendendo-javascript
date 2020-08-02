// module.exports nesse momento é um obj vazio
console.log(module.exports)
console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3

exports = null // o valor de exports não será alterado a não ser que alteremos pelo module.exports
console.log(module.exports)

// da mesma forma que no exemplo anterior o exports não terá seu seu valor alterado
exports = {
    nome: 'Teste'
}
console.log(module.exports)

// Sempre quando quisermos alterar o obj que será esportado devemos mudar o module.exports (não recomendável)
module.exports = { publico: true }
console.log(module.exports)