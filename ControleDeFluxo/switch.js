// switch

let expression = 'b'


switch (expression) {
    case 'a' :
        // codigo
        console.log('a')
        break
    case 'b' :
        // codigo para expression b
        console.log('b')
        break
    default:
        console.log('default')
    break
}


//switch

function calculate(number1, operator, number2) {
}

switch (operator) {
    case '+' :
        result = number1 + number2
        break
    case '-' :
        result = number1 - number2
        break
    case '*' :
        result = number * number2
        break
    case '/' :
        result = number1 / number2 
        break
    default:
        console.log('nao implementado')
        break
        

        
}

console.log(calculate(4, '%', 8))