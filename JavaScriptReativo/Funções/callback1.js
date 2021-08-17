//Callback 
//Passa uma função como parâmetro para outra função
//Programação reativa -> quando acontecer um evento você chama de volta

function exec(fn, a, b){
    return fn(a, b)
}

const somarNoTerminal = (x, y)=> console.log(x + y)
const subtrairNoTerminal = (w, z) => console.log( w - z)
const subtrair = (w, z) => w - z

exec(somarNoTerminal, 56, 38)
exec(subtrairNoTerminal, 182, 27)

const r = exec(subtrair, 50, 25)
console.log(r)


//Exemplo de intervalo usando callback 
//Fica chamando a função por aquele tempo definido, por isso callback

const cb = () => console.log('Exec...')
setInterval(cb, 1000);