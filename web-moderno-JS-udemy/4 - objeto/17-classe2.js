// Como funciona herança em Classes
class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

// através do extends aplicamos a herança em classes
class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor') {
        // através do super chamamos o construtor da classe/função pai, no caso da classe Avo
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor() {
        super('Silva')
    }
}

const filho = new Filho()
console.log(filho)