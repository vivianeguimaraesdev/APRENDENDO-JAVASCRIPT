//Map
//Para cada elemento array e ele vai retornar um novo array com os novos elementos da função

const numbers = [10, 6, 8, 19, 18, 20];

const numeros_Mult = numbers.map(dobro);

function dobro(element, index, array){
    return element * 2;
    //console.log(element, index, array);
}

console.log('ORIGINAL: ', numbers);
console.log('NOVO ARRAY: ', numeros_Mult);