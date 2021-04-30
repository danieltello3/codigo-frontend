import React, {useState} from 'react'
import './Register.scss'
const Register = () => {
    const [usuario, setUsuario] = useState("");
    const [nombre, setNombre] = useState("");
    const [dni, setDni] = useState("");
    const [direccion, setDireccion] = useState("");

    const signUp = (e)=>{
        e.preventDefault();
    }

    return (
        <div className="container">
            <h2>Hola, Bienvenido al blog de CodiGo</h2>
            <form onSubmit={signUp}>
                <label htmlFor="nombre">Nombre</label>
                <input id="nombre" type="text"/>
                <label htmlFor="dni">DNI</label>
                <input id="dni" type="number"/>
                <label htmlFor="direccion">Direccion</label>
                <input id="direccion" type="text"/>
                <label htmlFor="usuario">Usuario</label>
                <input id="usuario" type="text"/>
                <label htmlFor="password">Contraseña</label>
                <input id="password" type="password"/>
                <button type="submit">Ingresar</button>
            </form>
        </div>
    )
}

export default Register
