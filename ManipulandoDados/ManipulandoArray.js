// Manipulando Strings e Arrays

// Separa um texto que contem espaços, em um novo array onde cada texto é uma possição do array.
// Depois disso, transforme o array em um texto e onde eram espaços, coloque_

let phrase = "Eu quero viver o amor!"
let myArray = phrase.split(" ")
let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore.toLowerCase())
