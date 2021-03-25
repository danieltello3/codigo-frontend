//Clases

//las clases en js son funciones, con sintaxis especial, pero siguen siendo funciones
//ambos tienen el comportamiento de un objeto
//funcion

const func = function(){}

//clase

const clase = class{}


console.log(Object.getPrototypeOf(func))
console.log(Object.getPrototypeOf(clase))