// react, es una libreria que me permite hacer interfaces graficas

// basada en componentes funcionales (funciones que generan una pieza de codigo de UI)
//ej. un navbar, un footer, un Home

//react usa jsx, que es javascript con "superpoderes" o le agregan a la sintaxis de javascript ciertas funcionalidades
//eso no quita que pueda seguir trabajando en archivos con .js

//me permite trabajar la logica(funcionalidades(javascript)) y la interfaz de usuario (UI) que es el html.
//es mantenido por facebook
//usa una sintaxis basada en XML

import React, {useState} from 'react'
import './index.css'


const Home = () => {

    const [mes, setMes] = useState("")
    function adivinarElMes(mesActual){
        if(mesActual === "junio"){
            setMes("Junio")
            alert(`Adivinaste el mes!! ${mes}`)
        }else{
            setMes("")
            alert("uy! no adivinaste")
        }
    }

    const haciendoClick = () => {console.log("hiciste click pero en una funcion")}

    const otroClick = () => {console.log("OTRO CLICK")}
    
    const funcionConParametros = (valor)=>{console.log(`esta es una funcion con el siguiente parametro ${valor}`)}
    return (
        
        <div className="container">
            <button onClick={()=>{console.log("hiciste click")}}>Hazme click</button>
            <button onClick={()=> haciendoClick()}>Otro boton para eventos</button>
            <button onClick={otroClick}>boton 3</button>
            <button onClick={()=>{funcionConParametros("soyunvalor")}}>Pasando parametros</button>
            <p>Hola mundo</p>
            <button onClick={()=>{adivinarElMes(prompt("adivina el mes"))}}>Adivina el mes</button>
        </div>
    )
}

export default Home
