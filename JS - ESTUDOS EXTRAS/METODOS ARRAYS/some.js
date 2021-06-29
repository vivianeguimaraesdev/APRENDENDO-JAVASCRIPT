//Some
//Faz um teste se os elementos do array passam na sua função

const numbers = [10, 6, 2, 85, 23, 1, 3];

const value = numbers.some(maiornumero);

function maiornumero(element,index,array){
    return element > 10; // retorna true or false

}

console.log(value);
