// Set:
// Estrutura de conjunto
// Não indexada e não aceita repetição
const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corinthians')
times.add('Flamengo')
times.add('Vasco') // será ignorado pois o Set não aceita repetição

console.log(times)
console.log(times.size)
console.log(times.has('vasco'))
console.log(times.has('Vasco'))
times.delete('Flamengo') // possível utilizar o delete
console.log(times.has('Flamengo'))

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas'] // o 2º 'Lucas' será ignorado
const nomesSet = new Set(nomes)
console.log(nomesSet)
