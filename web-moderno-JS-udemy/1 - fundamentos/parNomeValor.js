// par nome/valor
const saudacao = 'Opa' // contexto Léxico 1

function exec() {
    const saudacao = 'Falaa' // contexto Léxico 2
    return saudacao
}

// Objetos sao grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Um Dois Tres',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)