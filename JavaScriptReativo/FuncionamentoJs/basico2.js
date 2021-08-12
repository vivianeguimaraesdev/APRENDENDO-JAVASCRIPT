//Passar uma função como parâmetro para outra função
//IMPORTANTE!!

function bomDia(){
    console.log("Bom dia!")
}

const boaTarde = function (){
    console.log("Boa Tarde!")
}


function executarQualquerCoisa(fn){
    if(typeof fn === 'function'){
    fn()
    }
    
}

executarQualquerCoisa(3); //isso não é válido 
//Precisa passar um parâmetro antes para a fn 
//fn como parametro é considerado um number e então não pode ser executado dessa forma
executarQualquerCoisa(bomDia)
executarQualquerCoisa(boaTarde)


//PARTE 02
// Retornando uma função a partir de outra função

function potencia(base, exp){
    return Math.pow(base, exp)
}

const bits8 = potencia(2,8)
console.log(bits8)

//Outra forma de fazer
//Função potencia recebe uma base e retorna outra função com o calculo do expoente

function potencia(base){
    return function(exp){
        return Math.pow(base, exp)
    }
}

const potenciaDe2 = potencia(2)
console.log(potenciaDe2(8))

//Chamando a potencia sem armazenar em uma variavel

const resultadoPot = potencia(3)(4);
console.log(resultadoPot)