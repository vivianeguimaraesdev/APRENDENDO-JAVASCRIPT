//Usando callback para ler um arquivo
//Quando esse arquivo for lido, será chamado um evento (a leitura)
//após o arquivo ser lido será passado o conteúdo dele


const fs = require('fs')
const path = require ('path')

//Join junta vários trechos de caminhos em UM só
//__dirname é uma constante disponivel que pega o arquivo do diretorio que estamos usando
const caminho = path.join(__dirname, 'dados.txt') //vai juntar em um path só

function exibirConteudo(err, conteudo){
    console.log(conteudo.toString()) //toString para ler só o conteudo string do arquivo
}

fs.readFile(caminho, exibirConteudo)
//primeiro parametro tem que ser o path e o segundo opções (objeto) ou callback
//o parametro err que não foi usado, pode colocar só __, assim você usa só o segundo parametro

//Outra forma com callback
fs.readFile(caminho, (_, conteudo)=> console.log(conteudo.toString()))

//Ler de forma síncrona readFileSync
//Vai esperar a leitura do arquivo, vai colocar a resposta na variavel e depois mostra no terminal

console.log('Inicio Sync...')
const conteudo = fs.readFileSync(caminho)
console.log(conteudo.toString())
console.log('Fim Sync...')