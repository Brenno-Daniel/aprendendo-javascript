// Usando a notação literal
// Não confundir a notação literal de objeto com JSON, são coisas diferentes
const obj1 = {}
console.log(obj1)

// Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Funções construtoras
function Produto(nome, preco, desc) {
    // Quando colocamos o this significa que o atributo é publico
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2989.0, 0.26)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// Função factory
// Factory é um padrão de projeto
// É uma função que cria e fabrica alguma coisa
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('João', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())

// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Uma função famosa que retorna objeto...
// Função JSON.parse
// Transformar um JSON em um objeto
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)

/*
Quando se tem um web service que retorna um JSON e vc ira interpretar no browser, 
vc transforma esse JSON em um objeto pra poder manipular como objeto e não como texto.

Quando vc submete um form e manda tudo como se fosse um JSON e vai receber no backend, vc 
coneverte os dados em objeto para que consiga manipular como objeto e não texto.
*/