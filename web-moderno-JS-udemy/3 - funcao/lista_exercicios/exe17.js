function salario(plano, salarioAtual, novoSalario) {
    switch(plano) {
        case 'planoA':
            return novoSalario = 1.1 * salarioAtual
        case 'planoB':
            return novoSalario = 1.15 * salarioAtual
        case 'planoC':
            return novoSalario = 1.2 * salarioAtual
        default:
            return 'Plano é inválido!'
    }
}

console.log(salario('planoA', 1000))
console.log(salario('planoB', 1000))
console.log(salario('planoC', 1000))
console.log(salario('planoF', 1000))