function gerarNumerosEntre(min, max) {
    if(min > max) {
        [max, min] = [min, max] // utilizando o destructuring para inverter a ordem dos valores, caso o usuário digitar o a ordem contrária
    }

    return new Promise(resolve => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        resolve(aleatorio)
    })
}

gerarNumerosEntre(1, 60)
    .then(num => num * 10)
    .then(numX10 => `O número gerado foi ${numX10}`)
    .then(console.log)
