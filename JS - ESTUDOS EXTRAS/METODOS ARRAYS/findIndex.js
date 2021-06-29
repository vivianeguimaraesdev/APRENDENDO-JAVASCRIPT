//Find Index
//Vai procurar o índice do elemento que passar na função de teste provida

const numbers = [10, 6, 8, 19, 18, 20];

const elementosIndex = numbers.findIndex(checkNumber);

function checkNumber(element,index,array){
    return element === 10;
}

console.log(elementosIndex);

//Se colocar um elemento que não existe ele retorna -1 dizendo que não existe
