function transformarFormatoMoney(valor) {
    return valor.toString().replace(".",",")
}


console.log(transformarFormatoMoney("R$ " + 0.30000000000000004.toFixed(2)))
console.log(transformarFormatoMoney("R$ " + 0.210003434.toFixed(2)))