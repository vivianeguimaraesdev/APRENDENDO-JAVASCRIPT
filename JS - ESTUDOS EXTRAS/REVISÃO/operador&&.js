//Operadores Lógicos - && (AND)
//Decidem o fluxo da aplicação se forem falsos ou verdadeiros
//Usado principalmente em intrusções de condições e repetição
//Ao invés de usar dois ifs, você pode usar um operador lógico e encadear as duas condições

var idade = 16;
var nome = "João";
//Compara duas condições em um if
if (nome == "João" && idade == 16){
    console.log("O João pode entrar na aula de esgrima!")
} else{
    console.log("Este não é o João!")
}

if (1 == 1 && 3 > 2 && true){
    console.log("Passou!");
}

//True + False = False

if((1 == 1 && 3 > 3) && true) {
    console.log("Passou");
  } else if(nome === "João" && idade >= 14) {
    console.log("Aqui passa!");
  }