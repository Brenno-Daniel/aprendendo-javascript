
/*1° Discriminante (Delta): delta = Math.pow(b,2) - 4 * a * c
2° Bhaskara: x = -b +- (raiz de delta) / 2 * a
3° Resultado (Raízes):
x1 = -b + Math.sqrt(delta) / 2 * a
x2 = -b - Math.sqrt(delta) / 2 * a
*/
function formulaBhaskara(a, b, c) {

    let delta = Math.pow((b), 2) - 4 * a * c

    if(delta < 0){
        return "Delta é negativo."
    } 

    let x1 = (-b + Math.sqrt(delta)) / 2 * a
    let x2 = (-b - Math.sqrt(delta)) / 2 * a

    let raizes = []
    raizes.push(x1)
    raizes.push(x2)

    return raizes
}

console.log(formulaBhaskara(1, 12, -13))
console.log(formulaBhaskara(2, -16, -18))
console.log(formulaBhaskara(1, 3, 2))
console.log(formulaBhaskara(3, 1, 2))