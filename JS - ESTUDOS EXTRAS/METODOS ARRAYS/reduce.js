//Reduce
//Executa todos os elementos de um array e retorna um único valor

const numbers = [10, 6, 4];

const total = numbers.reduce(minhafuncao, 0); // zero como acumulador para iniciar

function minhafuncao(acculmulator,value, index, array){
    console.log(acculmulator);
    console.log(' ');
    return acculmulator + value;
}

console.log(total); // valor de 16 + 4, está armazenado dentro do array