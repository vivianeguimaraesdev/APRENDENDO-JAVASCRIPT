//Instrução THIS
//Fora de escopos locais o this sempre se refere ao objeto global Window;
//Em objetos o this vai se referir a instância e pode acessar suas propriedades;
//O this ou você exibe um valor do objeto ou altera um valor

var teste = 5;

console.log(this); //representa o objeto window aqui 
console.log(this.teste); //da o resultado da variavel teste
console.log(teste);//também dá o valor 5

let pessoa = {
  nome: "Matheus",
  idade: 29,
  falar: function() {
    console.log("Olá, tudo bem?");
  },
  dizerNome: function() {
    console.log("O meu nome é " + this.nome);
  },
  aniversario: function() {
    this.idade += 1; //aumentou 1 na idade
  },
  saudacao: function() {
    return 'Sr. ' + this.nome;
  }
};

pessoa.dizerNome();

console.log(pessoa.idade);

pessoa.aniversario();
pessoa.aniversario();
pessoa.aniversario();

console.log(pessoa.idade);

var sdc = pessoa.saudacao();

console.log("Olá " + sdc);