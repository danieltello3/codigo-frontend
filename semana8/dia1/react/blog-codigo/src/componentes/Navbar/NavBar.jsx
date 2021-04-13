import React from 'react'
import logo from './../../logo.svg'
import './NavBar.css'

const NavBar = () => {
    return (
        <header>
            <img className="logo" src={logo} alt="logo"/>
            <nav>
                <a href="./Home">Home</a>
                <a href="./Contact">Contacto</a>
                <a href="./About-us">Sobre Nosotros</a>
                <a href="./Info">Informacion</a>
                <a href="./Register">Registrate</a>
                <a href="./Login">Iniciar Sesion</a>
            </nav>
        </header>
    )
}

export default NavBar
