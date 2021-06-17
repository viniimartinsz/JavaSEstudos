//throw

function sayMyName(name = '') {
    if (name === ''){
        throw new Error("Nome é necessario")
    }


    console.log('depois do erro')
}

// try...catch
try {  
    sayMyName('Mayk')

}   catch(e) {
    console.log(e)
}


console.log('Apos a função de erro')