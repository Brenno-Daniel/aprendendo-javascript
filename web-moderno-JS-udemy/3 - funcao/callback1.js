const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)

// somente os fabricantes
fabricantes.forEach( function(fabricante) {
    console.log(fabricante)
})

// somente os fabricantes - arrow function
fabricantes.forEach(fabricante => console.log(fabricante))