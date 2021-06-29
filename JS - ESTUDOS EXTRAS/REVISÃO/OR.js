//OPERADOR LÓGICO "OR" ||
//Ele retorna true caso uma das operações retorne verdadeiro;
//O Or retorna falso apenas se as duas expressões são falsas;
// O && precisa que a da esquerda e direita sejam verdadeiras para retornar true;

var idade = 12;
var nome = "João";

if(nome == "João" || idade > 14) {
  console.log("Pode entrar na aula de esgrima");
} else {
  console.log("Não pode entrar");
}

if(nome == "Pedro" && (30 > 20 || 10 == 10)) {
  console.log("testando");
} else {
  console.log("não entrou");
}