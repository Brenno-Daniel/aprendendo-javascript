// For of intera em cima de valores
for (let letra of "Cod3r") {
    console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promise']

// for in neste caso traz somente os indices
for (let i in assuntosEcma) {
    console.log(i)
}
// for of neste caso traz os valores
for (let assunto of assuntosEcma) {
    console.log(assunto)
}

const assuntosMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }]
])

// neste caso irá apresentar a estrutura do array [chave, valor]
for (let assunto of assuntosMap) {
    console.log(assunto)
}

// trazer somente as chaves usando o keys()
for (let chave of assuntosMap.keys()) {
    console.log(chave)
}

// somente os valores usando o values()
for (let valor of assuntosMap.values()) {
    console.log(valor)
}

// trazer a chave e valor usando entries()
// usando o destructuring
for (let [key, value] of assuntosMap.entries()) {
    console.log(key, value)
}

// percorrendo o for of através do Set
const s = new Set(['a', 'b', 'c'])
for (let letra of s) {
    console.log(letra)
}