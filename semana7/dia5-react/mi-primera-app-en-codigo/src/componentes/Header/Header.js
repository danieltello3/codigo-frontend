import React from 'react'
import './style.css'

const Header = () => {
    return (
        <nav className="cabecera">
            <h1 className="logo">codiBlog</h1>
            <div className="links">
                <a href="/">Inicio</a>
                <a href="/crear">nueva entrada</a>
                <a href="/contacto">Contacto</a>
            </div>
        </nav>
    )
}

export default Header
