//Método Filter
//Vai criar um novo array com todos os elementos que passaram no teste inclementar
// pela função fornecida.
//Essa função que será passada como callback ela vai ter que retornar true or false
//True para os elementos que vão permanecer ou seja vão para o novo array
//False vai ignorar 

const numbers = [10, 6, 8, 19, 18, 20];

const newArray = numbers.filter(minhafuncao); // função callback coloquei aqui e escrevi ela abaixo

function minhafuncao(value,index,array){
    return value >= 18; //essa condição vai retornar um true ou false
    //console.log(value);
    //console.log(index);
    //console.log(array);
}

console.log(newArray);