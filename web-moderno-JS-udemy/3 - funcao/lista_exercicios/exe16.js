function calculadora(num1, operacao, num2) {
    switch (operacao) {
        case '+':
            return num1 + num2
            break
        case '-':
            return num1 - num2
            break
        case '*':
            return num1 * num2
            break
        case '/':
            return num1 / num2
            break
        default:
            return 'Operação inválida!'
    }
}

console.log(calculadora(2, '+', 2))
console.log(calculadora(2, '-', 2))
console.log(calculadora(2, '*', 2))
console.log(calculadora(2, '/', 2))
console.log(calculadora(2, '%', 2))