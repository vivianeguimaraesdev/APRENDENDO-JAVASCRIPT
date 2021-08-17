//Estudando map com callback

//Nesse exemplo o map multiplica por dois e depois soma pelo tamanho do array
const nums = [1, 2, 3, 4, 5]
const dobro = (n, i, a) => n * 2 + i + a.length

console.log(nums.map(dobro))
//a map quando recebe callback espera 3 parametros
//que são valor, index e o proprio array
//a map passa por cada elemento do array e retorna um novo array

//EXEMPLO 02

const nomes = ['Ana', 'Bia', 'Gui','Lia','Rafa']
const primeiraLetra = texto => texto[0]
console.log(nomes.map(primeiraLetra))