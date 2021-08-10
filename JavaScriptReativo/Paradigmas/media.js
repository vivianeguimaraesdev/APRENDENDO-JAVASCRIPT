//Paradigma Imperativo
//Calculando Média

const notas = [8.7, 6.8, 7.7, 7.7, 9.2, 5.3, 8.0]

function media(notas){
    let total = 0
    for (let i = 0; i < notas.lenght; i++){
        total += notas[i]
    }

    return total / notas.lenght
}

const mediaTurma = media(notas)
console.log(`Média é ${mediaTurma}`)

//Paradigma Declarativo

const notas = [8.7, 6.8, 7.7, 7.7, 9.2, 5.3, 8.0]

const somar = (a, b) => a + b
const dividir = (a, b) => a / b

const mediaTurma = dividir(
    notas.reduce(somar),
    notas.lenght
)
console.log(`Média é ${mediaTurma}`)