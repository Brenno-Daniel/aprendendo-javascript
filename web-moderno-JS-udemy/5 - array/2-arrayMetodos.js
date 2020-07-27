const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
console.log(pilotos)

// remove ultimo elemento do array
pilotos.pop()
console.log(pilotos)

// adiciona na ultima posição
pilotos.push('Verstappen')
console.log(pilotos)

// remove o primeiro elemento do array
pilotos.shift()
console.log(pilotos)

// ao contrário do shift, o unshift adiciona ao primeiro elemento do array
pilotos.unshift('Hamilton')
console.log(pilotos)

// splice pode adicionar e remover elementos
// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)
//remover
pilotos.splice(3, 1) // remover Massa
console.log(pilotos)

// slice diferente de splice, pega uma parte do array e retorna um NOVO array gerado a partir desse método
const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1)

// primeiro parâmetro do slice é o primeiro elemento que ele irá pegar, o segundo parâmetro é o ultimo, porém ele não será incluído no novo elemento
const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)
