// Object.preventExtensions
// Evita que seu objeto possa ser extendido, não permite adicionar novos atributos, pode-se excluir atributos
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})

// Object.isExtensible verifica se o obj é exetensível ou não
console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha' // permite alterar o valor do nome do produto
produto.descricao = 'Borracha escolar branca' // não permite adicionar novos atributos ao obj, então essa linha será ignorada
delete produto.tag // permite deletar atributos do obj
console.log(produto)

// Object.seal (selar)
// Não podemos adicionar nem excluir novos atributos do obj, mas é possível alterar os atributos do obj
const pessoa = { nome: 'Ana', idade: 35 }
Object.seal(pessoa)
// Object.isSealed irá verificar se o obj está selado
console.log('Selado: ', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva' // não permite adicionar novos atributos ao obj
delete pessoa.nome // não permite remover atributos do obj
pessoa.idade = 29 // permite alterar atributos
console.log(pessoa)

// Object.freeze = selado + valores constantes
// não é possivel incluir, remover nem modificar os dados de todas as variáveis do obj
