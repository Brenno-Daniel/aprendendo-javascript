const tecnologias = new Map()
tecnologias.set('react', { framework: false })
tecnologias.set('angular', { framework: true })

console.log(tecnologias.react) // não é possível acessar o valor assim
// somente será possível através do get():
console.log(tecnologias.get('react').framework)

const chavesVariadas = new Map([
    [function () {}, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número']
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123)) // verificar se existe a chave dentro do obj
chavesVariadas.delete(123) // deletar chave
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size) // tamanho do obj

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b') // valor 'b' irá sobrepor o valor 'a' anterior
chavesVariadas.set(456, 'b') // chave 123 e chave 456 possuíram o valor 'b'
console.log(chavesVariadas)
