// Em node um arquivo é um módulo
// Módulo não permite que tudo que escrevemos dentro do módulo disponível
console.log(this) // this é um obj vazio

this.ola = 'Fala pessoal'
exports.bemVindo = 'Bem vindo ao node!'
module.exports.ateLogo = 'Até o próximo exemplo'
