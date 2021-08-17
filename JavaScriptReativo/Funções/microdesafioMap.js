//Microdesafio - Map 03
//Array só com números com qtde * preco
//Array que retorna só os itens do carrinho

const carrinho = [
    {nome: 'Caneta', qtde:10, preco: 7.99},
    {nome: 'Impressora', qtde: 0, preco: 649.50},
    {nome:'Caderno', qtde:4, preco:27.10},
    {nome: 'Lapis', qtde: 3, preco: 5.82},
    {nome:'Tesoura', qtde: 1, preco: 19.20}
]

const getNome = item => item.nome
console.log(carrinho.map(getNome))

const getTotal = item => item.qtde * item.preco
const totais = carrinho.map(getTotal)
console.log(totais)

//AULA MAP 04

//Implementando nossa própria versão de map
//não pode ser arrow function se não, não temos acesso ao array
Array.prototype.meuMap = function (){
    const novoArray = []
    for (let i = 0; i < this.length; i++){
        const resultado =   fn (this[i], i, this)
        novoArray.push(resultado)
      
    }
    return novoArray
}

const getNome = item => item.nome
console.log(carrinho.meuMap(getNome))

const getTotal = item => item.qtde * item.preco
const totais = carrinho.meuMap(getTotal)
console.log(totais)
