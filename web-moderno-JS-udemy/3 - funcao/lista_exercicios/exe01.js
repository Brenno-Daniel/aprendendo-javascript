function operacoes(operador1, operador2) {
    const soma = operador1 + operador2
    const sub = operador1 - operador2
    const mult = operador1 * operador2
    const div = operador1 / operador2

    return console.log(`Soma: ${soma}, Subtração: ${sub}, Multiplicação: ${mult}, Divisão: ${div}`)
}

operacoes(2, 2)