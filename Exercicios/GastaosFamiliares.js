/*  ### Sistema de gastos familiar

Crie um objeto que possuira 2 propriedades, ambas do tipo array:
    * receitas: []
    * despresas: []
    
    Agora, crie uma função que ira calcular o total de receitas                            
    e despresas e ira mostrar um mensagem se a familia esta com saldo                                                           
    positivo ou negativo, seguido do valor do saldo

*/ 

let family = {
        incomes: [2500, 3200, 240.34, 450.45],
        expenes: [320.23, 323,23, 2323, 349]
}

function sum(array) {
    let total = 0; 

    for(let value of array) {
        total += value
    }


    return total
}

function calculateBalance() {
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenes)
    
    const total = calculateIncomes - calculateExpenses

    const itsOk = total >= 0

    let balanceText = "negativo"


    if(itsOk) {
        balanceText = "positivo"    
    }

    console.log(`Seu saldo é ${balanceText}: ${total.toFixed(2)}R$`)

}
calculateBalance()