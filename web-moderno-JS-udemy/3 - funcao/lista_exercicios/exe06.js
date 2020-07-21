/* Fórmula para montante de juros simples
M = C * (1 + i * t)

Onde,

M: montante
C: capital
i: taxa de juros. Para substituir na fórmula, a taxa deverá estar escrita na forma de número decimal. Para isso, basta dividir o valor dado por 100.
t: tempo. A taxa de juros e o tempo devem se referir à mesma unidade de tempo.*/

function jurosSimples(capitalSimples, taxaJurosSimples, tempoSimples) {
    let montanteSimples = capitalSimples * (1 + taxaJurosSimples * tempoSimples)
    return console.log(montanteSimples)
}

jurosSimples(100, 10/100, 2)

/* Fórmula para calcular o juros compostos
M = C * (1 + i)^t
*/

function jurosCompostos(capitalComposto, taxaJurosComposto, tempoComposto) {
    let montanteComposto = capitalComposto * Math.pow((1 + taxaJurosComposto), tempoComposto)
    return console.log(montanteComposto)
}

jurosCompostos(100, 0.1, 2)