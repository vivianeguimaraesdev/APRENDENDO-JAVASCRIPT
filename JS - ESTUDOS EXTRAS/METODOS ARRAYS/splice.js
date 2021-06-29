//Splice
//Altera o conteúdo de um array, adicionando novos elementos enquanto remove elementos antigos
//Pode receber dois ou mais argumentos em uma função

const nomes = ["Elian", "Carlos", "João", "Sabrina"];

nomes.splice(2, 1);// primeiro argumento é indice que vai começar
//quantos elementos quer remover a partir daquele indice
console.log(nomes);
const removidos = nomes.splice(2, 1, "Mateus");
console.log(nomes);
console.log(removidos); // se colocar em uma variavel ela guarda os removidos.
