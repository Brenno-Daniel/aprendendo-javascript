// implementando padrão Middleware
// middleware pattern (chain of responsibility)
const passo1 = (contexto, next) => {
    contexto.valor1 = 'mid1'
    next()
}

const passo2 = (contexto, next) => {
    contexto.valor2 = 'mid2'
    next()
}

const passo3 = contexto => contexto.valor3 = 'mid3'

const exec = (contexto, ...middlewares) => {
    const execPasso = indice => {
        middlewares && indice < middlewares.length &&
            middlewares[indice](contexto, () => execPasso(indice + 1))
    }
    execPasso(0)
}

const contexto = {}
const contexto2 = {}
const contexto3 = {}
const contexto4 = {}
exec(contexto, passo1, passo2, passo3)
exec(contexto2, passo2, passo3, passo1) // podemos alterar a ordem de exeção dos passos
exec(contexto3, passo2, passo3) // podemos omitir a execução de um passo
exec(contexto4, passo3, passo2, passo1) // cuidado ao iniciar por um passo que não possui a função next(), pois não irá chamar o próximo middleware
console.log(contexto)
console.log(contexto2)
console.log(contexto3)
console.log(contexto4)
