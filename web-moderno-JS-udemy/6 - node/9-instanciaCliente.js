const contadorA = require('./7-instanciaUnica')
const contadorB = require('./7-instanciaUnica')

// Evitando o cache do node com uma factory
// No caso criando novas instâncias de um obj através de uma factory
const contadorC = require('./8-instanciaNova')() // precisamos retornar o obj ()
const contadorD = require('./8-instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)
