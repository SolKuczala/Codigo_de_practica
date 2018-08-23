function sum(a,b) {
    return a+b
}

function sum2(a,b) {
    return a*2 + b*2
}

function sum3(a,b) {
    return a*3 + b*3
}

function sum4(a,b) {
    return a*4 + b*4
}


let num1 = 1
let num2 = 2

console.log("sum =", sum(num1,num2))
console.log("sum2 =", sum2(num1,num2))
console.log("sum3 =", sum3(num1,num2))
console.log("sum4 =", sum4(num1,num2))



function calc(a,b,op) {
    return op(a,b)
}

let sum = function(a,b) {
    return a+b
}
let num1 = 5
let num2 = 10
calc(num1,num2,sum)


function genSum(v){
    return function(a,b){
        return a*v + b*v
    }
}



let arr = [0,1,2,3,4,5,6,7,8,9,9,8,7,6,5,4,3,2,1,0]
let arrFiltrado = []

for (let i = 0; i < arr.length; i++) {
    const nota = arr[i];
    if (nota >= 7) {
        arrFiltrado.push(nota)
    }
}

////////////////////////////////////////////////////////////////////7
function filter(arr, condicionDeFiltro) {
    let resultado = []
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        if (condicionDeFiltro(item)) {
            resultado.push(item)
        }
    }
    return resultado
}

let arr = [0,1,2,3,4,5,6,7,8,9,9,8,7,6,5,4,3,2,1,0]
const notaAprobada = function(nota) {
    return nota >= 7
}
console.log(filter(arr, notaAprobada))

// ----------------

function filter(arr, condicionDeFiltro) {
    let resultado = []
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        if (condicionDeFiltro(item)) {
            resultado.push(item)
        }
    }
    return resultado
}

let arr = [0,1,2,3,4,5,6,7,8,9,9,8,7,6,5,4,3,2,1,0]
console.log(filter(arr, nota => nota >= 7))

console.log(filter(arr, function(nota) {
    return nota >= 7
}))






nota => nota >= 7

(nota) => nota >= 7

nota => {
    return nota >= 7
}

const asdasd = function (nota){
    return nota >= 7
}

function notaAprobada(nota){
    return nota >= 7
}




















let notas = [0,1,2,3,4,5,6,7,8,9,9,8,7,6,5,4,3,2,1,0,4]

notas.map(item => item *2).filter(item => item >= 7).forEach(element => {
    console.log("alguien se saco la mitad de " + element)
});

const notasAldoble = notas.map().filter()



let res = notas.filter(nota => nota >= 7).map(nota => nota *2).map(nota => nota + 1)














































