# Scope

* Escopo determina a visibilidade d e alguma variavel no JS

## Block statment

````js

// vamos iniciar um bloco
{
    // aqui dentro é um bloco e posso colocar qualqeur codigo
}  // aqui fechamos o bloco
````
O bloco, tambem criara um novo escopo. Chamamos de 
´block-scoped`



## var

```js
// var é global e podera funcionar fora de um escoco de bloco

console.log('> existe x antes do bloco? ', x)

{
    var x = 0
}

console.log('> existe x depois do bloco? ', x)
````






## let e const

// const e let são locais e so funcionam no escopo onde foi criado

console.log('> existe y antes do bloco?', y)


{
        let y = 0
}


console.log('> existe y antes do bloco?', y)