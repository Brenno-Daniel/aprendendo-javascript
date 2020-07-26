// Falando sobre Object.create e o For in

// Object.create
const pai = { nome: 'Pedro', corCabelo: 'Preto' }

// Passamos o objeto que queremos que seja o protótipo do objeto que esta sendo criado pelo Object.create
const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

// além de passar o próprio obj pai, podemos definir os atributos inclusive definido o valor e algumas própriedades(writable, enumerable)
const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true }
})

console.log(filha2.nome)
filha2.nome = 'Carla' // nome não será alterado pois o writable está como false
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

/* Através do For in podemos ver se uma determinada propriedade pertence 
ao próprio obj que estamos percorrendo ou se ela veio por herança
*/
for(let key in filha2) {
    filha2.hasOwnProperty(key) ?
        console.log(`Propriedade própria: ${key}`) : console.log(`Propriedade por herança: ${key}`)
}
