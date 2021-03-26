//window

console.log(window.location)

console.log("esta es la URL de la pagina: ", location.href)

console.log("este es el host de mi pagina:", location.hostname)

console.log("este es mi host: ", location.host)

console.log("este es mi path(ruta/camino): ", location.pathname)

let contador = 0
let intervalo = setInterval(() => {
    console.log("Hola Mundo")
    contador++
    if(contador === 6){
        clearInterval(intervalo)
    }
},2000)


setTimeout(() => {
    console.log("esta es la ejecucion de setTimeout")
}, 6000)


//localStorage (almacenamiento local)

let password = window.localStorage.setItem("contrasenha","12345")

console.log(localStorage.getItem("contrasenha"))

if(window.confirm("deseas eliminar todas las variables guardadas en el local storage?")){
    window.localStorage.clear()
    alert("las variables fueron eliminadas")
}

console.log(localStorage.getItem("contrasenha"))