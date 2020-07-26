// Cadeia de protótipos (prototype chain)
Object.prototype.attr0 = '0' // somente um exemplo da aula, evitar de fazer isso!!
const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B', attr3: '3' }
const filho = { __proto__: pai, attr3: 'C' }
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3) // o attr3 será o 'C' por conta do conceito de sombreamento

const carro ={
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324, // shadowing = sombreamento
    status() {
        return `Modelo do carro: ${this.modelo}, está à: ${super.status()}`
    }
}

const volvo = {
    modelo: 'V40',
    status() {
        // super irá referenciar o metodo que esta no meu prototipo, que esta no objeto super, no obj pai
        return `Modelo do carro: ${this.modelo}, está à: ${super.status()}`
    }
}

// usando o setPrototypeOf para definir a relação de protótipo
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())
