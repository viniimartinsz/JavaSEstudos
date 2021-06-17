/*
    ### CElSIUS EM FAHRENHEIT

    Crie uma função que receba uma string em clelsius ou fahnheit e faca
    a transfarmação de uma unidade para outra

    C = (f - 32) * 5/9

    F = C * 9/5 + 32 

*/

// transformDegree('50F')
function transformDegree(degree) {
    const celciusExists = degree.toUpperCase().includes('C')
    const fahnheitExists = degree.toUpperCase().includes('F')


    // fluxo de erro
    if(!celciusExists && !fahnheitExists) {
        throw new Error('Grau nao identificado')
    }

    // fluxo ideal, F -> C
    let updatedDegree = Number(degree.toUpperCase().replace("F", ""));
    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
    let degreeSign = 'C'

    // fluxo alternativo C ->
    if(celciusExists) {
        updatedDegree = Number(degree.toUpperCase().replace("C", ""));
        formula = celsius => celsius * 9/5 + 32 
        degreeSign = 'F'
    
    }

    return formula(updatedDegree) + degreeSign
}

try {
    console.log(transformDegree('10C'))
    console.log(transformDegree('10F'))
    transformDegree('50Z')
} catch (error)                        {
    console.log(error.message)
}   
 

