// functions HOISTING

sayMyName()

function sayMyNAme() {
        console.log('Mayk')


        // console = Mayk
}


sayMyNAme()

const sayMyName = function() {
        console.log('Mayk')

        // console = erro
}