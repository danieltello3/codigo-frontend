import React from 'react'
import logo from './../../logo.svg'
import './NavBar.css'
import {Link, useHistory} from "react-router-dom"

const NavBar = () => {
    const history = useHistory();
    return (
        <header>
            <img className="logo" src={logo} alt="logo"/>
            <nav>
                <a href="./">Home</a>
                <a href="./Contact">Contacto</a>
                <a href="./Info">Informacion</a>
                <Link to="/detail">Detalles</Link>
                <a href="./Register">Registrate</a>
                <a href="./Login">Iniciar Sesion</a>
            </nav>
        </header>
    )
}

export default NavBar
