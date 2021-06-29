//Método Find
//Ele vai retornar o valor do primeiro elemento e passar no teste da função provida
//Essa função será uma callback 

const numbers = [10, 6, 8, 18, 19, 20];

const numeroaprovacao = numbers.find(minhafuncao);

function minhafuncao(value,index, array){
    return value  >= 18; //vai rodar essa função depois de cada elemento 
}

console.log(numeroaprovacao) // retorna o maior valor que seja maior ou igual ao 18
//vai retornar o primeiro valor que ele encontra por ordem de indice
//Se o 19 tivesse antes, ele pegaria o 19 por exemplo