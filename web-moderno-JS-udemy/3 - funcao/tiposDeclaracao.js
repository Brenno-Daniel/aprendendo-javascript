console.log(soma(3, 4)) // possibilita chamar a função antes da declaração da mesma.

// function declaration
function soma(x, y) {
    return x + y
}

// function expresssion
const sub = function (x, y) {
    return x - y
}

console.log(sub(3, 4)) // permite chamar somente após a declaração da constante na qual a função foi atribuida.

// named function expression
const mult = function mult(x, y) {
    return x * y
}

console.log(mult(3, 4)) // permite chamar somente após a declaração da constante na qual a função foi atribuida.