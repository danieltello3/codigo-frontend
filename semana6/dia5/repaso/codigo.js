// //variables : se usa para valores que cambiaran con el tiempo.
// // antes se usaba var

// let variable_objeto = {
//     propiedad1: "cadena de texto",
//     propiedad2: 0,
//     propiedad3: {
//         subpropiedad1: "cadena de texto",
//         subpropiedad2: 3
//     },
//     propiedad4: false
// }

// //constantes: valores que se asignan una vez y no vuelven a cambiar

// const miNombre = "mi Nombre no cambiara con el tiempo"

// const miFechaCumple = new Date("July 3 1992")


// function binomioCuadrado(a,b) {
//     return a**2 + 2*a*b + b**2
// }

// console.log(binomioCuadrado(3,2))

// //operadores ternarios

// let nombre = "daniel"

// let evaluaCondicion = nombre === "daniel" ? "si, acertaste el nombre" : "no, te equivocaste de nombre"

// console.log(evaluaCondicion)

// let dia = "martes"

// switch(dia){
//     case "lunes":
//         console.log("lentejas");
//         break;
//     case "martes":
//         console.log("Cau cau");
//         break;
//     case "miercoles":
//         console.log("Causa de Atun");
//         break;
//     case "jueves":
//         console.log("Olluquito");
//         break;
//     case "viernes":
//         alert("Oferta Especial, 2x1");
//         console.log("pollo al horno");
//         break;
// }

let arrayDeUsuarios = [
    { nombre: "Paul", edad: 21, colorFav: "verde" },
    { nombre: "Marie", edad: 31, colorFav: "azul" },
    { nombre: "Jhon", edad: 16, colorFav: "rojo" },
    { nombre: "Carla", edad: 51, colorFav: "dorado" },
    { nombre: "Paula", edad: 11, colorFav: "verde" },
    { nombre: "Mario", edad: 41, colorFav: "azul" },
    { nombre: "Jhoana", edad: 9, colorFav: "rojo" },
    { nombre: "Carlos", edad: 41, colorFav: "dorado" },
    { nombre: "Paulina", edad: 2, colorFav: "verde" },
    { nombre: "Marcos", edad: 65, colorFav: "azul" },
    { nombre: "Jhonatan", edad: 11, colorFav: "rojo" },
    { nombre: "Jimena", edad: 71, colorFav: "dorado" },
  ];

let colores15 = {
    rojo: 0,
    verde: 0,
    dorado: 0
}
let colores50 = {
    rojo1: 0,
    verde1: 0,
    dorado1: 0
}

for (elemento in arrayDeUsuarios){
    if(arrayDeUsuarios[elemento].edad > 15){
        
        switch(arrayDeUsuarios[elemento].colorFav){
            case "rojo":
                colores15.rojo++
                break;
            case "verde":
                colores15.verde++
                break;
            case "dorado":
                colores15.dorado++
                break;
            default:
                break;
        }
    }
}
for (elemento in arrayDeUsuarios){
    if(arrayDeUsuarios[elemento].edad < 50){
        switch(arrayDeUsuarios[elemento].colorFav){
            case "rojo":
                colores50.rojo1++
                break;
            case "verde":
                colores50.verde1++
                break;
            case "dorado":
                colores50.dorado1++
                break;
            default:
                break;
        }
    }
}

console.log(`hay ${colores15.rojo} personas que le gusta el color rojo y son mayores de 15 años`)
console.log(`hay ${colores15.verde} personas que le gusta el color verde y son mayores de 15 años`)
console.log(`hay ${colores15.dorado} personas que le gusta el color dorado y son mayores de 15 años`)
console.log(`hay ${colores50.rojo1} personas que le gusta el color rojo y son menores de 50 años`)
console.log(`hay ${colores50.verde1} personas que le gusta el color verde y son menores de 50 años`)
console.log(`hay ${colores50.dorado1} personas que le gusta el color dorado y son menores de 50 años`)

