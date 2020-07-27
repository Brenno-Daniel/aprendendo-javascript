// Implementando nosso próprio forEach

// Associando uma função chamada forEach2 no prototype de Array
// Essa dunção recebe um callback, que esperamos que seja uma função
Array.prototype.forEach2 = function(callback) {
    // Para cada uma das iterações do array chamamos o callback, passando os 3 parâmetros abaixo
    for(let i = 0; i < this.length; i++) {
        // Esse callback recebe 3 parâmetros: valor atual, índice e array completo
        callback(this[i], i, this)
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})