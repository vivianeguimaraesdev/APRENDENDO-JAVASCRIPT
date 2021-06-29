//forEach
//Ela executa uma função que será executada para cada elemento do array
//E vai retornar undefined, ela serve apenas para você executar a função de cada elemento do array

const numbers = [10, 6, 8, 19, 18, 20];

const resultado = numbers.forEach(printNumber);

function printNumber(value, index, array,element){
    console.log(`Index : ${index} Value:${value}`);
}

console.log(resultado)