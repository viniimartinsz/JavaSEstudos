// 1. Declare uma variavel de nome weight

let weight;

// 2. Que tipo de dado é a variavel acima?

console.log(typeof weight)

/*
    3. Declare uma variavel e atribua valores para cada um dos dados:
        * name: string
        * agr : Number (integer)
        * stars: Number (float)
        * isSubscribed: Boolean
*/

let name = "Mayk"
let age = 15
let stats = 4.8
let isSubscribed = true


/*
    4. A variavel studend abaixo é de que tipo de dados?

    4.1. Atribua a ela as mesmas propriedades e valores do exercicio 3.


    4.2 Mostre no console a seguinte mensagem:

        <name> de idade <age> pesa e <weight> kg pelos valores de cada propriedade do objeto

*/        

let studend = {};
    console.log(typeof studend)  // object

let studend = {
    name: "Mayke",
    age: 15,
    weight: 4.8,
    isSubscribed: true,
}

    console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg.`)

    /* 
        5. Declare uma variavel do tipo array, de nome students e atribua a ela nenhum valor, ou seja, somente o array vazio
    */    
   let students = []

   /*
        6. Retribua valor para a variavel acima, colocando dentro o objeto student da questao 4.
        (Nao copiar e colcar o objeto, mas usar o objeto criado e inserir ele no array)   
   */

        students = [
            student
        ]

    
    /*
        7. Coloque no console o valor da posicao zero do Array acima
    */
        console.log(studends[0])  
        
     /*
        8. Crie um novo student e coloque na posiçao 1 do Array students

     */

        const john = {
            name: "John",
            age: 23,
            weight: 74.8,
            isSubscribed: true,
        }
        
        studends = [            // students[1] = john
            student,            
            john
        ]
        console.log(students)

     /* 
        9. Sem rodar o codigo responda qual é a resposta do codigo abaixo e por que? Apos sua resposta, rode
        o codigo e veja se voce acertou.
        
        console.log(a)
        var a = 1
     */


        console.log(a)
        var a = 1