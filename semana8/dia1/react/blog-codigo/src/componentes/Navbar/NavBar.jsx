import React from "react";
import logo from "./../../logo.svg";
import "./NavBar.css";
import { Link, useHistory } from "react-router-dom";
import { Header } from "@react-spectrum/view";

const NavBar = () => {
   const history = useHistory()
   return (
      <Header>
         <img className="logo" src={logo} alt="logo" />
         <nav>
            <a href="/">Home</a>
            <a href="/Contact">Contacto</a>
            <Link to="/info">Informacion</Link>
            <a href="/detail">Detalles</a>
            <a onClick={() => history.push("/create")}>Crear nuevo blog</a>
            <a href="/Register">Registrate</a>
            <a href="/Login">Iniciar Sesion</a>
         </nav>
      </Header>
   );
};

export default NavBar;
