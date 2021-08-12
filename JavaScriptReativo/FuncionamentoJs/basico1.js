//Function Declaration vs Function Expression 

//Function Declaration

function bomDia(){
    console.log('Bom dia!')
}

bomDia();

//Function Expression 
/* Você trata a função dentro de uma variável.  */

const boaTarde = function (){
    console.log('Boa Tarde!')
}

boaTarde();
let x = boaTarde(); //retorna undefined 

//Flexibilidade em passar parâmetros para uma função

function somar(a, b){
    return a + b
}

const resultado = somar(3, 4, 5, 6, 7, 8); //javascript não reclama se você passa mais parametros
console.log(resultado);
//ele só vai ignorar os outros que você passou
//da mesma forma você pode passar menos parametros 
//parametro padrão = b = 0; 