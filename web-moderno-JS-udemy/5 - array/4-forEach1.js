// forEach percorre o array e também nos retorna o indice
// forEach permite executar uma função para cada item de um array

// possui 3 parâmetros, o nome do elemento que esta percorrendo no array, o indice e o próprio array
const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

// para cada elemento a função é chamada passando o nome e o inidice
// o indice sempre é acessado pelo segundo parÂmetro, então caso queira o indice deve ser passado sempre o primeiro parâmetro
aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})

// através de arrow function passamos somente um parÂmetro, no caso o nome
aprovados.forEach(nome => console.log(nome))

// outra alternativa é armazenar uma função numa variável e passar essa função por parâmetro para o forEach
const exibirAprovados = (aprovado, indice) => console.log(`${indice + 1} = ${aprovado}`)
aprovados.forEach(exibirAprovados)

// passando o terceiro parÂmetro array
aprovados.forEach(function(nome, indice, array) {
    console.log(`${indice} = ${nome}`)
    console.log('Terceiro parâmetro array: ',array)
})