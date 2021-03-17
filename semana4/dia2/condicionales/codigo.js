// condicionales

// if(condicion1){
//     //codigo que se ejecuta si se cumple condicion1
// } else if(condicion2){
//     //codigo que se ejecuta si se cumple condicion2
// }else {
//     //codigo que se ejecuta si se cumple condicion3
// }

// let condicion = true;

// if (condicion === false) {
//    console.log("Hola amigos, bienvenidos a codiGo");
// } else {
//    console.log("y que estas esperando ^^");
// }

// let a = 0;
// let b = 0;

// a = 4;
// b = 5;

// let suma = a + b;

// if (suma === 9) {
//    console.log("felicitaciones, adivinaste");
// } else {
//    console.log("Oh, lo siento, sigue intentando!! :)");
// }

// let lenguaje_de_programacion = "";

// if (lenguaje_de_programacion == "python") {
//    console.log("Python es asombroso");
// } else if (lenguaje_de_programacion == "javascript") {
//    console.log("Javascript tambien lo es!");
// } else if (lenguaje_de_programacion == "php") {
//    console.log("mejor apaga tu computadora xd");
// } else if (lenguaje_de_programacion == "c++") {
//    console.log("Woow, tu eres de los bravos");
// } else {
//    console.log("que? aun no sabes ninguno?");
// }

// //ejercicio condicionales

// let cancionFavorita = "";
// cancionFavorita = "Ode to the mets";

// if (cancionFavorita == "Mardy Bum") {
//    console.log("Well, can't we just laugh and joke around?");
// } else if (cancionFavorita == "Ode to the mets") {
//    console.log("Gone now are the old times");
// } else if (cancionFavorita == "Mr. Brightside") {
//    console.log("it was only a kiss");
// } else {
//    console.log("a ella le gusta la gasolina?");
// }
// //funciones

// function miFuncion() {
//    console.log("Mi primera funcion");
//    console.log("las funciones me sirven para no repetir mi codigo");
//    console.log("las funciones me ayudan a escribir mejor codigo");
// }

// function imprimeMiNombre(nombre) {
//    let miNombre = nombre;

//    if(miNombre === undefined){
//        miNombre = "Este dato es invalido"
//    }else if(miNombre !== "") {
//       miNombre = `Mi nombre es ${nombre}.`;
//    }else {
//         miNombre = "Debes ingresar un nombre valido";
//    }

//    return miNombre;
// }


// console.log(imprimeMiNombre("Daniel"));
// console.log(imprimeMiNombre(""));
// console.log(imprimeMiNombre())


// function calculaMisAñosPerro(edad){
//     if(edad === undefined) {
//         return "debes ingresar una edad valida"
//     }
//     if (edad > 0 && edad < 100){
//         return `mi edad en años perro es ${edad * 7}` 
//     }
//     if (edad === 0){
//         return "ingresa un numero valido"
//     }
// }

// console.log(calculaMisAñosPerro())
// console.log(calculaMisAñosPerro(24))
// console.log(calculaMisAñosPerro(0))

//funcion que evalue un parametro que se llama clima
//esta funcion debera mostrar una frase cuando ponga el tipo de clima

function climaActual(clima){
    
    if(clima === undefined || clima == ""){
        return "por favor, ingrese un dato valido."
    }else if(clima === "lluvioso"){
        return "te recomiendo salir con paraguas"
    }else if(clima === "soleado"){
        return "te recomiendo usar protector solar"
    }else if(clima === "nublado"){
        return "otro dia gris."
    }else if(clima === "nieve"){
        return "Esta Nevando!!"
    }else{
        return "mejor no salgas de casa"
    }
}

console.log(climaActual())
console.log(climaActual(""))
console.log(climaActual("lluvioso"))


let seleccionar = document.getElementById("selecto")
let parrafo = document.querySelector('p')

seleccionar.addEventListener('change', establecerClima)

function establecerClima(){
    
    let eleccion = seleccionar.value
    
    if(eleccion === undefined || eleccion === ""){
        parrafo.textContent = "por favor, ingrese un dato valido."
    }else if(eleccion === "lluvioso"){
        parrafo.textContent = "te recomiendo salir con paraguas"
    }else if(eleccion === "soleado"){
        parrafo.textContent = "te recomiendo usar protector solar"
    }else if(eleccion === "nublado"){
        parrafo.textContent = "otro dia gris."
    }else if(eleccion === "nieve"){
        parrafo.textContent = "Esta Nevando!!"
    }else{
        parrafo.textContent = "mejor no salgas de casa"
    }
}

