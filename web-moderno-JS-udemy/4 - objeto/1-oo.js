// CÓDIGO NÃO EXECUTÁVEL!!!

// Procedural
// Foco muito forte na função que manipulam dados, foco no procedimento
// Por exemplo uma função que recebe valores, e esses valores são processados
processamento(valor1, valor2, valor3)

// OO
// Foco passou a ser o objeto
// Passamos a ter dados e dentro dos dados temos funções
// Objeto é uma figura central no OO
// Funciona como uma capsula que agrupa comportamentos e atributos
objeto = {
    valor1,
    valor2,
    valor3,
    processamento() {
        // ...
    }
}

objeto.processamento()

/* Principios importantes:

1. abstração: 
Pegar um objeto do mundo real e traduzir esse objeto para dentro do seu sistema.

2. encapsulamento:
Você ter os detalhes de implementação escondidos, e mostrar uma interface simples 
para que possa interagir com determinado objeto.

3. herança (prototype):
Um principio baseado numa relação é 1 (ex: obj carro tem um motor, carro tem portas, 
porta tem parafusos, etc..).
Uma forma que reusar código.
Herança significa que recebe atributos e comportamentos de uma  objeto pai.
A herança é implementada no JS a partir de protótipos (prototype).
Priorize a composição ao invés da herança.**

4. polimorfismo:
Multiplas formas.


*/ 