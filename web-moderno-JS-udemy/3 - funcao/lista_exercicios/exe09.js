// Sistema de notas
function sistemaNotas(notaAluno = 0) {

    //Arrdondar a nota para o mais próximo múltiplo de 5
    let multiplo5
    multiplo5 = Math.ceil(notaAluno / 5) * 5

    //console.log(`Valor nota: ${notaAluno}, valor multiplo de 5: ${multiplo5}`)

    if (notaAluno >= 38 && notaAluno - multiplo5 < 3) {
        console.log(`Nota: ${notaAluno} e multiplo de 5: ${multiplo5}`)
        notaAluno = multiplo5
        console.log(`Aprovado com nota: ${notaAluno}`)
    } else if (notaAluno < 38) {
        console.log(`Reprovado com nota: ${notaAluno}`)
    }
}

sistemaNotas(100)
sistemaNotas(30)
sistemaNotas(38)
sistemaNotas(88)
sistemaNotas(61)


