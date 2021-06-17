/*
    Function() constructor

    * expressao new
    * crir um novo objeto
    * this keyword

*/


let date = new Date("2021-27-05")

console.log(Date)




function Person(name) {
    this.name = name
    this.walk = function(){
        return this.name + " esta andando"
    }
}
const mayk = new Person("Mayk")
const joao = new Person("Joao")
console.log(mayk.walk())
console.log(joao.walk())