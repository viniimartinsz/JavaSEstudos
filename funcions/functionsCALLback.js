// call back function

function sayMyName(name) {
    console.log('antes de executar a funcao callback')

    name()

    console.log('depois de executar a callback')
}

sayMyNAme(
    () => {
        console.log('estou em uma callback')
    }


)