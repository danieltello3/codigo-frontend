import React from "react";
import logo from "./../../logo.svg";
import "./NavBar.scss";
import { Link, useHistory } from "react-router-dom";

const NavBar = () => {
   const history = useHistory()
   return (
      <header className="header">
         <img className="header__logo" src={logo} alt="logo" />
         <nav className="header__nav">
            <a className="header__nav__a" href="/">Home</a>
            <a className="header__nav__a" href="/Contact">Contacto</a>
            <Link className="header__nav__a" to="/info">Informacion</Link>
            <a className="header__nav__a" href="/detail">Detalles</a>
            <a className="header__nav__a" onClick={() => history.push("/create")}>Crear nuevo blog</a>
            <a className="header__nav__a" href="/Register">Registrate</a>
            <a className="header__nav__a" href="/Login">Iniciar Sesion</a>
         </nav>
      </header>
   );
};

export default NavBar;
