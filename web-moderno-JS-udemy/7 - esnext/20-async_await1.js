function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(() => resolve(), tempo);
    });
}

async function executar() {
    // Se não colocar o await as funções serão executadas todas de uma só vez
    await esperarPor(1500)
    console.log('Async/Await 1...')

    await esperarPor(1500)
    console.log('Async/Await 2...')

    await esperarPor(1500)
    console.log('Async/Await 3...')
}

executar()