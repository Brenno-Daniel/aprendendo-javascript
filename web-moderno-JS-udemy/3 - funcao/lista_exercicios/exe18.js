function numeroDescrito(num) {
    switch(num) {
        case 1:
            return "Um"
        case 2:
            return "Dois"
        case 3:
            return "Três"
        case 4:
            return "Quatro"
        case 5:
            return "Cinco"
        case 6:
            return "Seis"
        case 7:
            return "Sete"
        case 8:
            return "Oito"
        case 9:
            return "Nove"
        case 10:
            return "Dez"
        default:
            return "Número fora do intervalo."
    }
}

console.log(numeroDescrito(1))
console.log(numeroDescrito(2))
console.log(numeroDescrito(3))
console.log(numeroDescrito(4))
console.log(numeroDescrito(5))
console.log(numeroDescrito(6))
console.log(numeroDescrito(7))
console.log(numeroDescrito(8))
console.log(numeroDescrito(9))
console.log(numeroDescrito(10))
console.log(numeroDescrito(11))
//console.log(numeroDescrito("a"))