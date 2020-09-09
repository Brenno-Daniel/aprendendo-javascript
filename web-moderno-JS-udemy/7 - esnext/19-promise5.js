// Tratamento de erros e exceções
function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        if(Math.random() < chanceErro) {
            reject('Ocorreu um erro!');
        } else {
            resolve(valor);
        }
    });
}

funcionarOuNao('Testando...', 0.5)
    .then(v => console.log(`Valor: ${v}`))
    .catch(err => console.log(`Erro: ${err}`)) // normalmente se utiliza o catch ao final
    .then(() => console.log('Fim!!'))


// Usando os blocos try... catch...
function funcionarOuNaoTryCatch(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        try{
            con.log('temp'); // forçando erro
            if(Math.random() < chanceErro) {
                reject('Ocorreu um erro!');
            } else {
                resolve(valor);
            }
        } catch(e) {
            reject(e);
        }
    });
}

funcionarOuNaoTryCatch('Testando...', 0.5)
    .then(v => `Valor: ${v}`)
    .then(
        v => console.log(v)
    )
    .then(() => console.log('Quase Fim!'))
    .catch(err => console.log(`Erro Geral: ${err}`))
