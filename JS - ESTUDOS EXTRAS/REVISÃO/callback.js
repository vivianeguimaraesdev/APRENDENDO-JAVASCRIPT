//Callback functions
//Permite executar uma função depois de uma determinada ação
//Conceito fundamental para entender a parte assíncrona do JS.
//A função vai esperar uma resposta para depois realizar o retorno...
//Callback caracteriza por passar para função uma outra função e executar ela como código..

function exibir(num) {
    console.log("A operação resultou em: " + num);
  }
  
  function soma(a, b, callback) {//podia ser qualquer nome no parametro
    var op = a + b;
    callback(op);
  }
  
  function multiplicacao(a, b, cb) {
    var op = a * b;
    cb(op);
  }
  
  soma(2, 2, exibir);
  
  multiplicacao(2, 4, exibir);