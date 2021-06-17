// callback function

function sayMyName(name) {
    console.log('antes de executar a funcao callback')
    
    name()

    console.log('depois de executar a callback')
}

sayMyName(
    () => {
        console.log('estou em uma callback')
    }
)











function sayMyName() {
    console.log('antes de executar a funcao callback')

    function name(){
        console.log('estou em uma callback')
    }
    console.log('depois de executar a callback')
}

sayMyName()