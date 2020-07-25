// Melhorias na notação literal de objetos no ES6

const a = 1
const b = 2
const c = 3

// antigamente tinhámos que criar objetos com essa duplicidade
const obj1 = { a: a, b: b, c: c }

// com o ES6, não há mais essa redundância
// se precisarmos mudar o nome do atributo precisamos usar a opção anterior, mais antiga que nos permite alterar o nome do atributo
const obj2 = { a, b, c }
console.log(obj1, obj2)

// outra melhoria quando queremos criar dinamicamente um atributo num objeto usando por exemplo uma string
const nomeAttr = 'nome'
const valorAttr = 10.25

// antes utilizávamos assim
const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

// na versão ES6
const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)

// simplicidade para criar funções dentro de objetos literais
const obj5 = {
    funcao1: function() {
        // ...
    },
    // agora com ES6 forma mais reduzida
    funcao2(){
        // ...
    }
}

console.log(obj5)
