
//destructuracion

let apellidos = ["ramos", "meza", "vargas"]


//sintaxis mala
let primerApellido = apellidos [0]


//importante, mejor sintaxis

let[Apellido1,Apellido2,Apellido3] = apellidos;

console.log(Apellido1)

let [manzana, pera] = ["melocoton", "pera"]

console.log(manzana)

let[saludo,,,nombree] = ["Hola","yo","soy","Daniel"]



let[a,...rest] = ["a","e","i","o","u"]

console.log(rest)

let peru = {
    nombreOf: "Republica del Peru",
    gentilicio: "Peruano",
    poblacion: "33 Millones"
}

let {nombreOf, gentilicio, poblacion} = peru

console.log(nombreOf)
console.log(gentilicio)



//ejercicio

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

let [primero,,,,,,,,,,,ultimo] = arrayDeUsuarios

console.log(primero, ultimo)

let {0 : prim ,[arrayDeUsuarios.length - 1] : ult} = arrayDeUsuarios;
console.log(prim, ult)


