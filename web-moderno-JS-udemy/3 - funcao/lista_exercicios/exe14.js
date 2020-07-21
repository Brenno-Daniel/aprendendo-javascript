function nomeDaFruta(fruta) {
    switch(fruta) {
        case 'maça':
            console.log('Não vendemos essa fruta aqui :/')
            break
        case 'kiwi':
            console.log('Estamos com escassez de kiwi :(')
            break
        case 'melancia':
            console.log('Aqui está, são 3 reais o quilo!')
            break
        default:
            console.log('Isto não é uma fruta!!')
    }
}

nomeDaFruta('maça')
nomeDaFruta('kiwi')
nomeDaFruta('melancia')
nomeDaFruta('beterraba')