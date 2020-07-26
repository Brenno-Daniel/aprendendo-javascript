/*Herança

Priorize a composição pois é mais flexivel do que a herança
na herança só temos em JS um classe pai, na compisição podemos ter um objeto que é composto 
por multiplos objetos
*/

/* Herança baseada em protótipos

 Objeto em JS tem uma referencia para seu prototipo, dessa forma o JS define herança, 
 a partir da referencia pra um prototipo tem-se uma referencia pra um outro objeto e esse objeto tem 
 atributos e comportamentos que podem ser acessados pelo objeto filho

É uma forma de ter reuso de código
 */


// O conceito de protótipo é diferente da propriedade de prototype que existe dentro das funções:
// [[Prototype]] != prototype

const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

// A partir do __proto__ conseguimos acessar o protótipo, que seria o objeto pai
console.log(ferrari.__proto__)
console.log(ferrari.prototype) // undefined pois o Object não tem o atributo prototype, somente o __proto__
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)
