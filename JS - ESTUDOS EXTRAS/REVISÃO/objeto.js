//Podemos criar os nossos objetos com propriedades e metódos para auxiliar
//nossos programas
//Característica principal abre e fecha com {}

let pessoa = {
    nome: "Matheus",
    idade: 29,
    falar: function() { //criou um método dentro do objeto aqui
      console.log("Olá, tudo bem?");
    },
    soma: function(a, b) {
      return a + b;
    }
  };
  
  console.log(pessoa.nome);
  
  pessoa.falar();
  
  var soma = pessoa.soma(2, 2);
  
  console.log(soma);
