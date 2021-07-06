//Objetos no JavaScript
//É um outro tipo de valor no JS.
//É um valor que permite armazenar varias chaves e pares de valor, ou seja
//é como se fosse variáveis dentro de uma variável.
//chave = nome da variavel
//valor = valor contido na variavel

var usuario = {
    nome: 'Ayrton',
    idade: 25,
    youtube: 'Programador a bordo'
};

console.log(usuario);
console.log(usuario.idade);
console.log(usuario.nome);
console.log(usuario.youtube);

console.log(usuario['youtube']); //imprimir por propriedade

usuario.ano = 2019; //adiciona elementos
console.log(usuario);
console.log(usuario.ano);
//Removendo elementos

delete usuario.idade;
console.log(usuario);

//Passando propriedades
usuario.hobbies = ['Musica','Programar', 'Viajar'];
console.log(usuario);

