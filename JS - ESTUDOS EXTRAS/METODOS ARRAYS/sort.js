//Sort
//Usado para ordenação de valores crescente ou descrecente

const numeros = [5,4, 3, 2, 1];

numeros.sort((a, b) =>{
    if (a > b) return -1;
})

console.log(numeros);