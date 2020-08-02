// Process é um obj do node, que a partir dele conseguimos ler dados digitados pelo usuário e printar na tela
// além disso conseguimos ler os parametros que forem passados para quando chamar uma aplicação em 
// node diretamente pelo terminal
const anonimo = process.argv.indexOf('-a') !== -1
// console.log(anonimo) // pegar parâmetro pelo terminal, digitar no terminal: node 21-entradaESaida.js -a (retorna true)

if(anonimo) {
    process.stdout.write('Falaa Anônimo!!\n')
    process.exit()
} else {
    process.stdout.write('Informe o seu nome: ')
    // evento on data ocorre quando o usuário digita no teclado e aperta o Enter
    process.stdin.on('data', data => {
        const nome = data.toString().replace('\n', '') // substituindo o Enter digitado pelo user para evitar quebra de linha incorreta

        process.stdout.write(`Fala ${nome}!!!\n`)
        process.exit()
    })
}
