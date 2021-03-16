//este es un comentario en javascript//

/* Este es un comentario
    de varias lineas*/

//variable de tipo texto
let nombre = "Daniel";
let sistemaOperativo = "Windows";
console.log(typeof nombre);

// alert("mi nombre es " + nombre + " y mi sistema operativo es " + sistemaOperativo)
alert(
   `Mi segundo nombre es ${nombre} y mi sistema operativo es ${sistemaOperativo}`
);
let edad = 28;

//variable de tipo numero
let miEdad = 24;
let miPeso = 68;
let miAltura = 1.69;

let IMC = miPeso / miAltura ** 2;

alert(`mi IMC es ${IMC}`);

//operaciones basicas en javascript
// let a = 6;
// let b = 4;

// let suma = a + b;
// console.log(suma);

// let resta = a - b;
// console.log(resta);

// let division = a / b;
// console.log(division);

// let multiplicacion = a * b;
// console.log(multiplicacion);

// let potencia = a ** b;
// console.log(potencia);

// let radicacion = b ** 0.5;
// console.log(radicacion);

// let modulo = a % b;
// console.log(modulo);

//declarar una variable para la formula de grados centigrados a fahrenheit

let celsius = 5;
let fahrenheit = 48;

let CtoF = celsius * (9 / 5) + 32;
let FtoC = (fahrenheit - 32) * (5 / 9);

console.log("Celsius a Fahrenheit", CtoF);
console.log("Fahrenheit a Celsius", FtoC);

//variable tipo booleano --> true (1) or false (0)

let soyFrontend = true;

let machineLearning = false;

//JSON --> Javascript Object Notation
let json2 = {
    propiedad6: 123
}
let json = { propiedad1: "valor de texto", propiedad2: 34, propiedad3: true, propiedad4: json2};


let Daniel = {
    nombre: "Daniel",
    apellidoPaterno: "Tello",
    apellidoMaterno: "Castillo"
}

let nombreCompleto = `${Daniel.nombre} ${Daniel.apellidoPaterno} ${Daniel.apellidoMaterno}`

console.log("Mi nombre completo es", nombreCompleto)



//ejercicio Json

let datos = {
    hobbie: "dormir",
    mascota: 1,
    hombre: true,
    mujer: false
}

alert(`Bienvenido ${nombreCompleto}`)

let a = 1
let b = 5
let c = 6

let x1 = (-b + ((b**2) - 4*a*c) ** 0.5) / 2*a
let x2 = (-b - ((b**2) - 4*a*c) ** 0.5) / 2*a

console.log(`El resultado de la formula cuadratica es X1 = ${x1} y X2 = ${x2}`)