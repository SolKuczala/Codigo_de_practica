//calcu

//el primero podia usar +
function sumar(num1,num2) {
    num1 + num2
}

//restar

function restar(num1,num2) {
    num1 + (-num2)
}

//multiplicar

function multiplicar(num1,num2) {
    let numeroOriginal = num2
    if (num2 < 0){
        num2 = -num2
    }

    let resultadoParcial = 0
    for (let i = 0; i < num2; i++) {
        resultadoParcial = resultadoParcial + num1
    }
    if (numeroOriginal !== num2) {
        return -resultadoParcial
    } else {
        return resultadoParcial
    }
  }

console.log(multiplicar(2,-4));//6 expected

//console.log(multiplicar(2,3))//6
// for (let index = 0; index < array.length; index+) {
//     const element = array[index];
    
// }
    
