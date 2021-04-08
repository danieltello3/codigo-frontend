let arrayNumeros = [10,20,30]

let arrayResultado = arrayNumeros.map((numero) => numero * 2)

console.log(arrayResultado)


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

function imprimirUsuarios() {
    arrayDeUsuarios.map((user,index)=>{
        console.log(`${index}. hola soy ${user.nombre}, tengo ${user.edad} años y mi color favorito es el ${user.colorFav}`)
    }
)}

// imprimirUsuarios()

let impUsuarios = () => {
    
    arrayDeUsuarios.map((user)=>{
        const newList = document.createElement("Li")
        newList.textContent = `hola soy ${user.nombre}, tengo ${user.edad} años y mi color favorito es el ${user.colorFav}`
        document.getElementById("usuarios").appendChild(newList)
    }
)}

impUsuarios()

// reduce()

let sumaElementos = [10,20,30]

let = resultado = sumaElementos.reduce((acumulador,numero)=> {return acumulador + numero})

console.log(resultado)

