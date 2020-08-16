// Promise = Promessa
// Usamos quando queremos ter algum processamento assíncrono
function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    })
}

// encadeando as funções com then()
falarDepoisDe(3, 'Que top!')
    .then(frase => frase.concat(' Muito legal!!!'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e)) // tratamento de erro da Promise usando o catch
