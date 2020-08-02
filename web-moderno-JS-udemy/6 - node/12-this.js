// Algumas validações sobre o this
console.log(this === global)
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)

// Tomar cuidado ao utilizar o this e se atentar pois dentro de uma função ele aponta para global
function logThis() {
    console.log('Dentro de uma função...')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)
}

logThis()