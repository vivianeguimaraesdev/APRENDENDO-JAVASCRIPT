// length - quantidade de elementos
var arr = [1,2,3,4,5];

console.log(arr.length);

// push - adiciona elemento ao fim do array
arr.push(6);
arr.push('Qualquer coisa');

console.log(arr);

// pop - remove o elemento do fim do array
arr.pop();

console.log(arr);

// unshift - adiciona o elemento no inicio do array
arr.unshift(0);
arr.unshift('teste');

console.log(arr);

// shift - remove do inicio do array
arr.shift();

console.log(arr);

// Acessar o último elemento
console.log(arr[arr.length - 1]);

// isArray - verifica se é um array ou não
console.log(Array.isArray(5)); // false

console.log(Array.isArray(arr));//true