{
    {
        {
            {
                var sera = 'Será???'
                console.log(sera)
            }
        }
    }
}
// variavel sera esta acessivel
console.log(sera)

//variavel dentro do escopo de uma funcao
function teste() {
    var local = 123
    console.log(local)
}

teste()
//variavel local não esta acessivel fora do escopo da funcao
//console.log(local)