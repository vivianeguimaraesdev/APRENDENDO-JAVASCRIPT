//PARTE 01 - Criar função somar (3) (4) (5) - 3 parametros funções

function somar(a){
    return function (b){
        return function (c){
            return a + b + c
        }
    }
}

const SomarAB = somar(3)(4);
console.log(somarAB(13));
//Outra forma:
console.log(somar(13)(20)(30));


//PARTE 02
//Criar função calcular com 2 parametros e o terceiro parametro é uma função
//O terceiro parametro que vai calcular os dois primeiros parametros

function calcular(x){
    return function (y){
        return function (fn){
            return fn(x, y)
        }
    }
}

function subtrair (a, b){
    return a - b
}

function multiplicar (a, b){
    return a * b
}

const r1 = calcular(10)(5)(subtrair);
console.log(r1);

const r2 = calcular(10)(5)(multiplicar);