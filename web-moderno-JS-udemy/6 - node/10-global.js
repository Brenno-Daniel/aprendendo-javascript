// console.log(global)

// ao adicionar MinhaApp ao objeto global qualquer arquivo terá acesso à ele, 
// não é recomendável realizar alterações em objeto global, somente em casos específicos e com muito cuidado
globalThis.MinhaApp = Object.freeze({
    saudacao() {
        return 'Estou em todos os lugares!'
    },
    nome: 'Sistema Legal'
})
