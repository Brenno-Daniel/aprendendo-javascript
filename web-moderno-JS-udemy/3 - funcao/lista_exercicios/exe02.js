function classificaTriangulo( lado1, lado2, lado3) {
    if(lado1 == lado2 && lado1 == lado3 && lado2 == lado3) {
        console.log("Este triangula é Equilátero")
    } else if(lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
        console.log("Este é um trinângulo Isósceles.")
    } else if(lado1 != lado2 && lado1 != lado3 && lado2 != lado3) {
        console.log("Este é um triângulo Escaleno.")
    }else{
        console.log("Parâmetros incorretos.")
    }
}

classificaTriangulo(2, 2, 2) //Equilatero
classificaTriangulo(2, 3, 3) // Isósceles
classificaTriangulo(1, 2, 3) // Escaleno