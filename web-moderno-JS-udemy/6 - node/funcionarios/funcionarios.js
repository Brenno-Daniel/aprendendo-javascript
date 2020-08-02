const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
// axios é um client http, ele faz requisições de algo que esta remoto
const axios = require('axios')

// fazendo requisição no JSON de funcionários e retornando para um array de obj
axios.get(url).then(response => {
    const funcionarios = response.data
    //console.log(funcionarios)


    // mulher chinesa com menor salario? *******************

    // ********************* Meu código *********************
    // filtrar pelo genero M
    // filtrar pais china
    // filtrar menor salario

    const generoM = genero => genero.genero == 'F'
    const paisChina = pais => pais.pais == 'China'
    const salarioMenor = (salario, salarioAtual) => {
        return salarioAtual.salario > salario.salario ? salario : salarioAtual
    }

    const resultado = funcionarios.filter(generoM).filter(paisChina).reduce(salarioMenor)
    console.log(resultado)

    // ********************* Meu código *********************

    // ********************* Código da aula *********************

    const chineses = f => f.pais === 'China'
    const mulheres = f => f.genero === 'F'
    const menorSalario = (func, funcAtual) => {
        return func.salario < funcAtual.salario ? func : funcAtual
    }

    const func = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)

    console.log(func)

    // ********************* Código da aula *********************

})


