/*
    Transformar notas escolares

    Crie um algoritmo que transforma as notas do sistema numerico para sistema de notas em caracteres tipo A B C

    * de 90 para cima - A
    * entre 90 - 89 - B
    * entra 70 - 79 - C
    * entre 60 - 69 - D
    * menor que 60 - F

*/

function getScore(score) {
        let scoreA = score >= 90 && score <= 100
        let scoreB = score >= 80 && score <= 89
        let scoreC = score >= 70 && score <= 79
        let scoreD = score >= 60 && score <= 69
        let scoreF = score < 60 && score >= 0


        let scoreFinal;

        if (scoreA) {
            scoreFinal = "A"
        } else if (scoreB) {
            scoreFinal = "B"
        } else if (scoreC) {
            scoreFinal = "C"
        } else if (scoreD) {
            scoreFinal = "D"
        } else if (scoreF) {
            scoreFinal = "F"
        } else {
            scoreFinal = "Nota invalida"
        }

        return scoreFinal

}
    console.log(getScore(101))
    console.log(getScore(10))  
    console.log(getScore(70))  
    console.log(getScore(34))  
    console.log(getScore(-23))     
    console.log(getScore(40))  
    console.log(getScore(43))  
    console.log(getScore(55))  
    console.log(getScore(-123124))  
    console.log(getScore(1000))  
    console.log(getScore(100))  
    console.log(getScore(1)) 
  