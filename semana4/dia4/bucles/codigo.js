
// FOR

// for(let pasos=0; pasos<5 ;pasos++){

// }

//imprimir numeros pares menores a 300

// for(let i=0; i<=300 ; i++){
//     if(i%2 == 0){
//        console.log(i)
//     }
// }

// //imprimir todos los numeros divisibles entre 3 o 5 o 7 

// for(let i=0;i<=1000;i++){
//     if(i%3 == 0 || i%5 == 0 || i%7 == 0){
//         console.log(i)
//     }
// }

// //
// let suma = 0
// for(let i=1; i<1000;i++){
//     if(i%3==0 || i%5 == 0){
//         suma += i;
//     }
// }

// console.log("la suma es: ", suma)

// WHILE
// se usa cuando no se conoce la cantidad de elementos que voy a recorrer

// let contador = 0
// let suma2 = 0

// while(contador < 1000){
//     if(contador%3==0 || contador%5==0){
//         suma2+= contador
//     }
//     contador++
// }

// console.log("la suma usando while es: ", suma2)


//

// let alumnos_favoritos = ["Cristiano","Messi","Maradona","Pele","Iniesta"]
// let informacion = "Mis alumnos favoritos son: "

// const texto = document.querySelector("p")

// for(let i =0 ; i < alumnos_favoritos.length; i++){
//     informacion += alumnos_favoritos[i] + ", "
// }

// texto.textContent = informacion


let vocales = ["a","e","i","o","u"]
let titulo = document.querySelector("h1")

for(let i = 0; i < vocales.length ; i++){
    setTimeout(()=>{
        titulo.textContent += vocales[i] + " "
    }, 1000*i)
}