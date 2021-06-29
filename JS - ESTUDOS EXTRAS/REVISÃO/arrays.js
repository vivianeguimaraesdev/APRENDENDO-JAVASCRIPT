//Arrays são objetos em JavaScript, mas são considerados como listas.
//Qualquer tipo de dado,aceita embora não seja comum.
//Responde por índice. 
//Criado por colchetes
// Objeto é {}

var arr = [5, "Matheus",true, {teste:1, nome:2}]; 
//É possivel adiconar objetos dentor de um array também
console.log(arr);

var arr2 = [2,3,4,5,6];
console.log(arr2);

//Acessando elementos

console.log(arr[1]);
console.log(arr2[0]);

//Adicionar elementos

arr[4] = 10; // adiciona o 10 ao fim do array.
arr[0] = "Teste";

console.log(arr);
console.log(typeof arr); // o array é considerado um objeto em js, mas com sintaxe diferente

