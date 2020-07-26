// Toda função tem o atributo prototype
console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

// Como todos acima são function, podemos realizar coisas como:
// adicionar novas funções e atributos dentro de String
String.prototype.reverse = function() {
    // transformando a string em array, quebrando em caracteres, invertendo a ordem com reverse e juntando novamente com o join
    return this.split('').reverse().join('')
}

// Acessamos o array ou string dentro do método o=de um protótipo a partir do this
console.log('Curso Web Moderno'.reverse())

Array.prototype.first = function() {
    return this[0]
}

// criando um array literal
console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c'].first())

// Não devemos mexer em funções que existem dentro do protótipo, como no exemplo abaixo
String.prototype.toString = function() {
    return 'Lascou tudo'
}

// Não irá reverter a string passada abaixo e sim o retorno da função acima
console.log('Curso Web Moderno'.reverse())

// Devemos ter cuidado com o exemplo acima pois pode gerar algum efeito catrastrófico ao alterar funções padrão dentro do protótipo
