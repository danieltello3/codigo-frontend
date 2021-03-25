//Math

//es un objeto con un conjunto de funciones para hacer calculos matematicos

function calcularAreaCirculo(radio){
    return Math.PI * Math.pow(radio,2)
}

console.log(calcularAreaCirculo(4))

let numeroMayor = Math.max(1,2,3,4,5,6)
console.log(numeroMayor)

let arrayNumeros = [23,34,56,12,23,45]

console.log(...arrayNumeros)
console.log(arrayNumeros)