//Arrow Function
//Foco em sintaxe e em como escreve a função
//É uma função anônima que não tem nome
// () => 


const felizNatal = () => console.log('Feliz Natal!')
felizNatal();

const saudacao = (nome) => `Fala ${nome}, beleza?`
//Não da para colorar um return sem par de chaves 
//Então a função fica como uma única expressão
console.log(saudacao('Maria'))

//Se tiver apenas um parametro pode excluir os parenteses

const somar = (...numeros) =>{
    console.log(Array.isArray(numeros))
    let total = 0
    for (let n of numeros){
        total += n
    }
    return total 
}

console.log(somar([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(somar(1, 2, 4, 7, 8)); // sem oassar como array para identifcar lá em cima

//Retornar uma função dentro de uma função como ARROW FUNCTION

//Dá para fazer em uma linha 
const potencia = (base)=> exp => Math.pow(base, exp);

console.log(potencia(2)(8))

//this --- AULA EXTRA  
//O this não funciona na arrow function só na função tradicional
Array.prototype.log = function (){
    console.log(this[this.length - 1])
}
const numeros = [1, 2, 3]
numeros.ultimo()
