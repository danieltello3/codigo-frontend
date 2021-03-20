//callbacks

function mostrarAlerta(){
    alert("Hola!")
}

const boton = document.querySelector("button")

boton.addEventListener("click", mostrarAlerta)


let segundos = 5

function cuentaAtras(){
    
    setInterval(() => {
        imprimirSegundos();
        segundos--
    },1000)
    
}
    
    
function imprimirSegundos(){
    console.log(segundos)
}

cuentaAtras()