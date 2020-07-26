// Entendendo mais sobre a função e sobre o atributo prototype da função
function MeuObjeto() {}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto

// Todos os objetos criados a partir de uma mesma função construtora apontam para o mesmo prototype
console.log(obj1.__proto__ === obj2.__proto__)

// quando criamos um obj a partir de uma função construtora, 
// ela aponta para a função.prototype e não para Object.prototype, 
// conforme o teste retorna true abaixo
console.log(MeuObjeto.prototype === obj1.__proto__)

/* Podemos colocar um atributo diretamente no prototipo da função
    assim todos os filhos, os objetos que forem criados a partir dessa 
    função construtora terão acesso ao atributo nome e à função falar
*/
MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia! Meu nome é ${this.nome}!`)
}

obj1.falar()

obj2.nome = 'Rafael'
obj2.falar()

// alterando manualmente o obj3 para sair de Object.prototype para MeuObjeto.prototype
// assim obj3 também tem acesso aos atributos nome e função falar
const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype
obj3.nome = 'Obj3'
obj3.falar()

// Resumindo a loucura...
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype) // true
// função também tem um __proto__ que aponta para Function.prototype
console.log(MeuObjeto.__proto__ === Function.prototype) // true
console.log(Function.prototype.__proto__ === Object.prototype) // true
console.log(Object.prototype.__proto__ === null) // null pois não existe nada acima de Object.prototype na cadeia hierárquica

// Resumo em forma gráfica na vídeo aula 99 - Herança #04
