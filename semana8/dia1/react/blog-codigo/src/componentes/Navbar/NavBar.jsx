import React from "react";
import logo from "./../../logo.svg";
import "./NavBar.css";
import { Link, } from "react-router-dom";

const NavBar = () => {
   
   return (
      <header>
         <img className="logo" src={logo} alt="logo" />
         <nav>
            <a href="/">Home</a>
            <a href="/Contact">Contacto</a>
            <Link to="/info">Informacion</Link>
            <a href="/detail">Detalles</a>
            <a href="/Register">Registrate</a>
            <a href="/Login">Iniciar Sesion</a>
         </nav>
      </header>
   );
};

export default NavBar;
