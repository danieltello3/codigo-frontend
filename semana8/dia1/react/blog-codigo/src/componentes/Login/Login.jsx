import React from 'react'
import './Login.scss'

const Login = () => {

    const signIn = (e)=> {
        e.preventDefault();

    }

    return (
        <div className="container">
            <h2>Hola, Bienvenido al blog de CodiGo</h2>
            <form onSubmit={signIn}>
                <label htmlFor="usuario">Usuario</label>
                <input id="usuario" type="text"/>
                <label htmlFor="password">Contraseña</label>
                <input id="password" type="password"/>
                <button type="submit">Ingresar</button>
            </form>
        </div>
    )
}

export default Login
