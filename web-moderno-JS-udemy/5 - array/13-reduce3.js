// Implementando um reduce

// Reduce sem o valor inicial
Array.prototype.reduce2 = function(callback) {
    let acumulador = this[0]
    for (let i = 0; i < this.length; i++) {
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}

const soma = (total, valor) => total + valor
const nums = [1, 2, 3, 4, 5, 6]
console.log( 'Reduce sem valor inicial: ', nums.reduce(soma))


// Reduce com o valor inicial
Array.prototype.reduce2 = function(callback, valorInicial) {
    const indiceInicial = valorInicial ? 0 : 1 // se o valor inicial estiver setado então o indice inicial será 0, se não, será 1
    let acumulador = valorInicial || this[0] // acumulador é o valor inicial ou o primeiro indice do array
    for (let i = indiceInicial; i < this.length; i++) {
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}

const soma2 = (total, valor) => total + valor
const nums2 = [1, 2, 3, 4, 5, 6]
console.log('Reduce com valor inicial: ', nums2.reduce(soma2, 21))
