//Arrow Function
//Foco em sintaxe e em como escreve a função
//É uma função anônima que não tem nome
// () => 


const felizNatal = () => console.log('Feliz Natal!')
felizNatal();

const saudacao = (nome) => "Fala" + nome + "!!"
//Não da para colorar um return sem par de chaves 
//Então a função fica como uma única expressão
console.log(saudacao('Maria'))

//Se tiver apenas um parametro pode excluir os parenteses