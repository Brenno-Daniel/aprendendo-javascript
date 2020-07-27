// Classe foi adicionado na versão ECMAScript 2015
// na verdade é um detalhe de sintaxe pois a classe é convertida em uma função
// a classe em JS é centrada em função

// Exemplo de classe abaixo com construtor

class Lancamento {
    constructor(nome = 'Genárico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    // função que recebe um ou mais lançamentos e ao final concatena tudo em um array
    addLancamentos(...lancamentos) {
        // pegar cada elemento e dar um push no array que pertence ao obj
        lancamentos.forEach(lancamento => this.lancamentos.push(lancamento))
    }

    sumario() {
        let valorConsolidado = 0
        // para cada um dos lançamentos vai somar ao valor consolidado
        this.lancamentos.forEach(lancamento => {
            valorConsolidado += lancamento.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salário', 2105)
const contaDeLuz = new Lancamento('Luz', -220)

const contas = new CicloFinanceiro(6, 2018)
contas.addLancamentos(salario, contaDeLuz)
console.log(contas.sumario())
