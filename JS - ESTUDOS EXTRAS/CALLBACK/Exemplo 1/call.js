//Callback = chamada de retorno (tradução literal)
//Vai ser executada em algum momento, mas não o momento padrão que é uma função igual a outra
//Criando um botão por exemplo:

const $button = document.querySelector('button');

$button.addEventListener('click',() =>{
    console.log('Button foi clicado');
}) // Essa arrow function é uma callback, está aguardando para ser executada.
//Vai ser executada quando acontecer o click e ai ela imprime o console

//Callbacks são comuns também em eventos assincronos, que não acontece na hora.
$button.addEventListener("click", handleClick);
