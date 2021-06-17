// Estrutura de repetição
// for

for(let i = 1; i <= 10; i++) {
    console.log(i)
}


for(let i = 10; i > 0; i--) {
    if(i === 5) {
        break;
    }
    console.log(i)
}

// break = parar retetição

for(let i = 10; i > 0; i--){
    if(i === 5) {
        continue;
    }

    console.log(i)
}

// continue - pula a execução do momento 