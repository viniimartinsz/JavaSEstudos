// object

const person = {
    name: 'John',
    age : 30,
    weight: 88.6,
    isAdmin: true,
}

console.log(person) // mostrar todos os dados

console.log(`${person.name} tem ${person.agr} anos `)






// Array

const animals = [
        'Lion',             // 0
        'Monkey',           // 1
        'Cat',              // 3
]

// acessar valores dentro de Array
console.log(animals[0])



const animals = [
    'Lion',
    'Monkey',
    {
        name:'cat',
        age:'3'

    }
]

// acessar valores dentro de Array
console.log(animals[2].name)