// function scope

let subject = 'create video' 

function createThink(subject) {
    subject = 'study'
    return subject
}


console.log(subject)                        // vai aparecer         study
console.log(createThink(subject))           //                      create video    









let subject = 'create video' 

function createThink() {
    subject = 'study'
    return subject
}


console.log(subject)                        // vai aparecer         study
console.log(createThink(subject))           //                      study








let subject = 'create video' 

function createThink(subject) {
    return subject
}


console.log(subject)                        // vai aparecer         create video  
console.log(createThink(subject))           //                      create video   