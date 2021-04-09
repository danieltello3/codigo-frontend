//reduce

let numerosPares = [2,4,6,8]

let resultado = numerosPares.reduce((acumulador,numero)=>{
    return acumulador + numero
})

console.log(resultado)


//map

let numerosImpares = [1,3,5,7,9]

numerosImpares.map((numero) => {
    console.log(numero * 10)
})

//find: nos permite hallar el primer elemento que coincide con la condicion

let arrayColores = ["azul", "verde","rojo", "plateado"]

let colorSecreto = arrayColores.find((color) => color === "plateado")

console.log(colorSecreto)


let tesorosPerdidos = [{
    nombre: "cofre del tesoro",
    valor: 100000000,
    pais:"costa rica"
},
{
    nombre: "santo grial",
    valor: 1000000000,
    pais: "israel",
},
{
    nombre: "quipu",
    valor: 100000,
    pais: "peru",
},
{
    nombre: "capa inca",
    valor: 1000,
    pais: "peru"
}]


let tesoro = tesorosPerdidos.find(elemento => elemento.nombre === "cofre del tesoro")

console.log(tesoro)

//filter

let tesorosPeruanos = tesorosPerdidos.filter((tesoro) => tesoro.pais === "peru")

tesorosPeruanos.map((tesoro) => {
    console.log(tesoro.nombre)
})
