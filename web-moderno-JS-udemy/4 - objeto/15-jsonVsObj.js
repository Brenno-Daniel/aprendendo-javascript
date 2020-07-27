// JSON vs Objeto
const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } }
// JSON.stringify irá converter objeto em JSON,
// a função não será convertida
console.log(JSON.stringify(obj))

// JSON.parse converte string JSON para obj
// console.log(JSON.parse("{ a: 1, b: 2, c: 3 }"))
// console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }"))
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'))
// também é possível converter float, string entre aspas duplas, objetos e arrays de JSON
console.log(JSON.parse('{ "a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }'))