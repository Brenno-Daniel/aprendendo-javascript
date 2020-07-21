const peso1 = 1.0  
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) //Metodo para saber se uma var/const é do tipo inteira
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.190
const avaliacao2 = 7.890

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))
console.log(media.toString()) //Retorna representação em String de um objeto
console.log(media.toString(2)) //Retorna o valor em binário

console.log(typeof media)
console.log(typeof Number)