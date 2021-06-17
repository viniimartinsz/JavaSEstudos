/*
    Type Conversion (typecasting) vs Type coersion
*/

console.log(Number('9') + 5)


/*

    FALSY
    Quandod um valor é considerado false em 
    contextos onde um booleano é obrigatorio ( condicionais e loops)

    false
    0
    -0
    ""
    null
    underfined
    NaN

*/


console.log( 0 ? 'verdadeiro' : 'false')


/*

    TRUTHY
    Quando um valor é considerado true em contextos onde um booleano é obrigatorio
    ( condicionais e loops)

    true
    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    Infinity
    -Infinity

 */   


console.log( "false" ? 'verdadeiro' : 'falso')