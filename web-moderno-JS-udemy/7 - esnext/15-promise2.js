// somente callback
// cenário de Callback hell (callback dentro da outra)
setTimeout(function() {
    console.log('Executando callback...')

    setTimeout(function() {
        console.log('Executando callback...')

        setTimeout(function() {
            console.log('Executando callback...')
        }, 2000)
    }, 2000)
}, 2000)

// usando Promise
function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log('Executando promise...')
            resolve()
        }, tempo)
    })
}

esperarPor()
    .then(() => esperarPor())
    .then(esperarPor)
