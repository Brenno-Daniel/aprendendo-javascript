require('./10-global')

console.log(MinhaApp.saudacao())

// Podemos alterar o nome do objeto
// Como esse objeto ficou passível de mudança e podemos alterá-lo, uma alternativa é o uso do freeze
MinhaApp.nome = 'Eita, mudei o nome do sistema!' // com o Object.freeze tornamos o obj constante
console.log(MinhaApp.nome)