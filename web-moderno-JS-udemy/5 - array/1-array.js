// Array é uma estrutura dinâmica
// o Array em JS na realidade é um Objeto
console.log('typeof de Array: ',typeof Array)
console.log('typeof de new Array (instânia a partir da função Array): ', typeof new Array)
console.log('typeof de Array literal: ' , typeof [])

// podemos criar um array a partir da instância da função Array
let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

// criando um Array literal
aprovados = ['Bia', 'Carlos', 'Ana']
// acessando array diretamente pelo indice
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) // quando tentamos acessar um indice inexistente é retornado undefined

// adicionar novo elemento diretamente pelo inidice, esse exemplo é mais comum para substituir um elemento pelo indice
aprovados[3] = 'Paulo'
console.log(aprovados[3])
// adicionar pelo push()
aprovados.push('Abia')
console.log(aprovados[4])
console.log('Tamanho do array atual: ',aprovados.length, ' = ', aprovados)

// adicionando a um indice fora da sequencia
aprovados[9] = 'Rafael'
console.log('Tamanho do array atual: ',aprovados.length, ' = ', aprovados)
console.log(aprovados[8] === undefined)

console.log(aprovados)

// ordenar o array causando uma alteração no array
aprovados.sort()
console.log(aprovados)

// excluir elemento utilizando o delete
delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

console.log('-----//-----//-----')

aprovados = ['Bia', 'Carlos', 'Ana']

// método Splice serve para algumas coisas, como adicionar elementos em um indice, 
// serve para remover elementos de um array, e serve para remover e adicionar elementos ao mesmo tempo
// primeiro parâmetro é o indice que se quer trabalhar, o segundo parâmetro é o elemento que se quer remover
// aprovados.splice(1, 2) // neste caso vai a partir do indice 1, vai excluir dois indices, ficando apenas = ['Bia']
// console.log(aprovados)

// caso queira adicionar elementos ao Array basta colocar no terceiro parâmetro do splice
// aprovados.splice(1, 2, 'Elemento1', 'Elemento2') // neste caso irá remover Carlos e Ana e adicionar Elemento1 e Elemento2
// console.log(aprovados)

// caso não queira remover um elemento do array basta deixar como 0 o segundo parâmetro do splice
aprovados.splice(1, 0, 'Elemento1', 'Elemento2')
console.log(aprovados)
