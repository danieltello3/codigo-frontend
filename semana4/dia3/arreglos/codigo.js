

let arreglo = [1,2,3,4,5]

let alumnos_codigo = ["pepito", "maria", "juan", "jose"]

let mi_suerte = [true, false, true, true, false]


 console.log(arreglo[arreglo.length -1])

//agregar elemento al final del array

alumnos_codigo.push("Daniel")

console.log(alumnos_codigo[alumnos_codigo.length - 1])

//eliminar el ultimo elemento de mi array

alumnos_codigo.pop()

console.log(alumnos_codigo[alumnos_codigo.length - 1])

// agregar elemento al incio del array, usamos unshift

alumnos_codigo.unshift("Ana")

console.log(alumnos_codigo[0])

//eliminar el primer elemento de mi array, usamos shift

alumnos_codigo.shift()
console.log(alumnos_codigo[0])

//saber el index de un elemento con indexOf
6
console.log(alumnos_codigo.indexOf("juan"))
