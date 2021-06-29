// Splice - Adiciona um elemento no meio do array
var arr = [1,2,3,4,5];

arr.splice(2, 0, 999); //posição (2), quantidade elementos que quer excluir(0)
//e elemento que quer adicionar(999)

console.log(arr);

arr.splice(4, 1); //Neste removeu o elemento 4 com o splice

console.log(arr);

// indexOf - indentifica o indice de um elemento a posição dele

console.log(arr.indexOf(5));


// join - transforma um array em uma string
var arr2 = ["O", "rato", "roeu", "a", "roupa"];

console.log(arr2.join(","));


// reverse - inverte os elementos de ordem
console.log(arr2.reverse());