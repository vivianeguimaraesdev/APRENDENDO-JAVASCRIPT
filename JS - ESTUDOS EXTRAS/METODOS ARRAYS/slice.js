//Slice
//Ele vai retornar uma parte de cópia de um array, através de outro array;
//Não vai mexer no array original

const frutas = ["Banana","Laranja","Limão","Maçã","Manga"];

const citrus = frutas.slice(1,3) // começa no 1 e exclui até o 3 - não exclui o 3

console.log(citrus);
console.log(frutas);
